
const {struct, u32, ns64, nu64, nu64be,u8} = require("@solana/buffer-layout");
const {Buffer} = require('buffer');
const web3 = require("@solana/web3.js");
// const serialize = require("borsh");

const start = async function() {
  //change this
  let secret = Uint8Array.from(<byte array from json wallet />);
  let program_id = new web3.PublicKey(<contrac address />);
  let treasury = new web3.PublicKey(<treasury address />);


  let TOKEN_PROGRAM_ID = new web3.PublicKey(
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  );
  let SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3.PublicKey(
    "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
  );
  let mint = new web3.PublicKey(
    "5CZJ7e4uUWCogW2z7rvcE2yur6yE7Z7kcGYrFqLLXSL9"
  );
  let rent = new web3.PublicKey(
    "SysvarRent111111111111111111111111111111111"
  );
  let myacc = web3.Keypair.fromSecretKey(secret);

  let connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
  var vault_enc = new TextEncoder().encode('vault');
  let vault_pda = await web3.PublicKey.findProgramAddress([vault_enc],program_id);
  vault_pda=vault_pda[0];

  let vault_mint_holder = await web3.PublicKey.findProgramAddress(
      [
        vault_pda.toBuffer(), 
        TOKEN_PROGRAM_ID.toBuffer(), 
        mint.toBuffer()
      ],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
  vault_mint_holder=vault_mint_holder[0];

  let wallet_mint_holder = await web3.PublicKey.findProgramAddress(
      [myacc.publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
  wallet_mint_holder=wallet_mint_holder[0];
  var price_enc = new TextEncoder().encode('price');
  let price_pda = await web3.PublicKey.findProgramAddress([price_enc],program_id);
  price_pda=price_pda[0];
  


  let allocateTransaction = new web3.Transaction({
    feePayer: myacc.publicKey
  });

  let keys = [
    {pubkey: myacc.publicKey, isSigner: true, isWritable: true},
    {pubkey: web3.SystemProgram.programId, isSigner: false, isWritable: true},
    {pubkey: vault_pda, isSigner: false, isWritable: true},

    {pubkey: vault_mint_holder, isSigner: false, isWritable: true},
    {pubkey: mint, isSigner: false, isWritable: false},
    {pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false},
    {pubkey: rent, isSigner: false, isWritable: false},
    {pubkey: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID, isSigner: false, isWritable: false},

    {pubkey: treasury, isSigner: false, isWritable: true},
    {pubkey: wallet_mint_holder, isSigner: false, isWritable: true},
    {pubkey: price_pda, isSigner: false, isWritable: true},
  ];


  
  const commandDataLayout = struct([
    u8('instruction'),
    nu64('amount'),
  ]);

  let data = Buffer.alloc(1024);

  {
    const encodeLength = commandDataLayout.encode(
      {
        instruction: 1,
        amount: 2,
      },
      data,
    );
    data = data.slice(0, encodeLength);
  }

  allocateTransaction.add(new web3.TransactionInstruction({
    keys,
    programId: program_id,
    data,
  }));

  const result = await web3.sendAndConfirmTransaction(connection, allocateTransaction, [myacc]);
  console.log(result);
}
start();