import logo from "./logo.svg";
import "./App.css";
// import * as solanaWeb3 from '@solana/web3.js';
// // console.log(solanaWeb3);
// const {Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction, clusterApiUrl, Connection} = require("@solana/web3.js");

// let secretKey = Uint8Array.from([155,189,61,171,136,185,47,21,165,177,236,225,3,244,192,127,184,184,204,236,37,125,247,85,66,6,38,162,175,40,167,43,96,108,23,185,114,8,175,168,248,64,33,183,68,65,246,55,183,207,12,197,242,104,90,9,225,242,84,148,83,168,206,94]);

// let keypair = Keypair.fromSecretKey(secretKey);

// console.log(keypair, "keypair");

// let toKeypair = Keypair.generate();
// let transaction = new Transaction();

// transaction.add(
//   SystemProgram.transfer({
//     fromPubkey: keypair.publicKey,
//     toPubkey: toKeypair.publicKey,
//     lamports: LAMPORTS_PER_SOL
//   })
// );

// let connection = new Connection(clusterApiUrl('devnet'));

// sendAndConfirmTransaction(
//   connection,
//   transaction,
//   [keypair]
// ).then((result) => console.log(result, "result"))

const { struct, u32, ns64 } = require("@solana/buffer-layout");
const { Buffer } = require("buffer");
const web3 = require("@solana/web3.js");

// const sendTransaction = async () => {
//   console.log("working")
// let keypair = web3.Keypair.generate();
// let payer = web3.Keypair.generate();

// let connection = new web3.Connection(web3.clusterApiUrl('devnet'));

// let airdropSignature = await connection.requestAirdrop(
//   payer.publicKey,
//   web3.LAMPORTS_PER_SOL,
// );

// await connection.confirmTransaction(airdropSignature);

// let allocateTransaction = new web3.Transaction({
//   feePayer: payer.publicKey
// });
// let keys = [{pubkey: keypair.publicKey, isSigner: true, isWritable: true}];
// let params = { space: 100 };

// let allocateStruct = {
//   index: 8,
//   layout: struct([
//     u32('instruction'),
//     ns64('space'),
//   ])
// };

// let data = Buffer.alloc(allocateStruct.layout.span);
// let layoutFields = Object.assign({instruction: allocateStruct.index}, params);
// allocateStruct.layout.encode(layoutFields, data);

// allocateTransaction.add(new web3.TransactionInstruction({
//   keys,
//   programId: web3.SystemProgram.programId,
//   data,
// }));

// const result = await web3.sendAndConfirmTransaction(connection, allocateTransaction, [payer, keypair]);
// console.log(result, "result")

// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Solana example</p> */}
        {/* <button onClick={sendTransaction}>Send Transaction</button> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
