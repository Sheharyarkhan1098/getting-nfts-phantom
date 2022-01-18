import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import * as web3 from '@solana/web3.js';
import React, { FC, useCallback, useState } from 'react';
import Calculator from './calculator';
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { getParsedNftAccountsByOwner,isValidSolanaAddress, createConnectionConfig,} from "@nfteyez/sol-rayz";

const {struct, u32, ns64, nu64, nu64be,u8} = require("@solana/buffer-layout");

export const SendOneLamportToRandomAddress: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [tokens, setTokens] = useState(5000);
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [showData, setShowData] = useState(false);
    const [message, setMessage] = useState("");
 

    useEffect(() => {
      if(publicKey){
      
        toast.success('Connected', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }); 
      }
    }, [publicKey])
    console.log(publicKey, "publicKey")

    const checkNFTs = async () => {
      setMessage("Fetching NFTs....")
      const connect =    createConnectionConfig(web3.clusterApiUrl("devnet"));
        // const provider = getProvider();
        let ownerToken = publicKey;
        // let ownerToken = "7VPjjEj7mukgBf9TqpDxivnu7BNH4rdUmSFUpgvpLvf7";
        const result = isValidSolanaAddress(ownerToken);
        console.log("result", result);


      const nfts = await getParsedNftAccountsByOwner({
        publicAddress: publicKey,
        // publicAddress: "7VPjjEj7mukgBf9TqpDxivnu7BNH4rdUmSFUpgvpLvf7",
        connection: connect,
        serialization: true,
      });
      console.log(nfts);
      setData(nfts);
      let imageData = []
        nfts.map(async (obj) => {const response = await fetch(obj.data.uri); const result = await response.json(); imageData.push({name: obj.data.name, src: result.image});});
        
       setTimeout(() => {
         console.log(imageData, "imageResult")
         setImages(imageData)
         setShowData(true)
         setMessage("")
       }, 6000)    
      // return nfts;
    } 

//     const onClick = useCallback(async (tokens) => {
//         if (!publicKey) throw new WalletNotConnectedError();
        
//         let program_id = new web3.PublicKey("NasPprjwNrthkHtQYjHWgAdGsPfTMMeGZLF8WncHmfi"); 
//         let treasury = new web3.PublicKey("A2GZtC22s3T1aQA6PosDKPLmvBjZSNEWs9vNsXkikMyV"); 
        
//         let TOKEN_PROGRAM_ID = new web3.PublicKey(
//             "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//           );
//           let SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3.PublicKey(
//             "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
//           );
//           let mint = new web3.PublicKey( 
//             "yvbrxE6zjrA8SxxSpL7oojDBB5QDmF5CVqJWea8JcQE" 
//           ); 
 
//           let rent = new web3.PublicKey(
//             "SysvarRent111111111111111111111111111111111"
//           );

//         let connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
     
//         var vault_enc = new TextEncoder().encode('vault');
//         let vault_pda = await web3.PublicKey.findProgramAddress([vault_enc],program_id);
//         vault_pda=vault_pda[0];

//         let vault_mint_holder = await web3.PublicKey.findProgramAddress(
//             [
//                 vault_pda.toBuffer(), 
//                 TOKEN_PROGRAM_ID.toBuffer(), 
//                 mint.toBuffer()
//             ],
//             SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
//         );
//         vault_mint_holder=vault_mint_holder[0];

//         let wallet_mint_holder = await web3.PublicKey.findProgramAddress(
//             [publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
//             SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
//         );
//         wallet_mint_holder=wallet_mint_holder[0];
//         var price_enc = new TextEncoder().encode('price');
//         let price_pda = await web3.PublicKey.findProgramAddress([price_enc],program_id);
//         price_pda=price_pda[0];


//         let keys = [
//             {pubkey: publicKey, isSigner: true, isWritable: true},
//             {pubkey: web3.SystemProgram.programId, isSigner: false, isWritable: true},
//             {pubkey: vault_pda, isSigner: false, isWritable: true},
        
//             {pubkey: vault_mint_holder, isSigner: false, isWritable: true},
//             {pubkey: mint, isSigner: false, isWritable: false},
//             {pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false},
//             {pubkey: rent, isSigner: false, isWritable: false},
//             {pubkey: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID, isSigner: false, isWritable: false},
        
//             {pubkey: treasury, isSigner: false, isWritable: true},
//             {pubkey: wallet_mint_holder, isSigner: false, isWritable: true},
//             {pubkey: price_pda, isSigner: false, isWritable: true},
//           ];

//         let allocateTransaction = new Transaction({
//             feePayer: publicKey
//           });

//           const commandDataLayout = struct([
//             u8('instruction'),
//             nu64('amount'),
//           ]);
        
//           let data = Buffer.alloc(1024);
        
//           {
//             const encodeLength = commandDataLayout.encode(
//               {
//                 instruction: 1,
//                 amount: tokens * 1000000000,
//               },
//               data,
//             );
//             data = data.slice(0, encodeLength);
//           }
        
//           allocateTransaction.add(new web3.TransactionInstruction({
//             keys,
//             programId: program_id,
//             data,
//           }));

//           try {

//             const signature = await sendTransaction(allocateTransaction, connection);
            
//             const result = await connection.confirmTransaction(signature, 'processed');
//             if(result.value.err){
//               console.log(result.value.err)
//             }else{
// //               <div classs="container p-5">
// // 	<div class="row no-gutters fixed-bottom">
// // 		<div class="col-lg-5 col-md-12">
// // 			<div class="alert alert-success fade show" role="alert">
// // 				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
// // 			    	<span aria-hidden="true">&times;</span>
// // 			  	</button>
// // 			 	<h4 class="alert-heading">Transaction Confirmed</h4>
// // 			  	<p>This is an alert within a column. The column can be made any size at different viewpoints.</p>
// // 			</div>
// // 		</div>
// // 	</div>
// // </div>
// //               alert(`transaction confirmed`)
//               // document.getElementById('result').innerText = signature;
//               console.log(signature, "transaction confirmed")
//               toast.success('Success', {
//                 position: "bottom-left",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 });
//             }
//           }catch(e){
//             console.log(e, "error")
//             toast.error('Error', {
//               position: "bottom-left",
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               });
//             // alert("something went wrong! check logs for error")
//           }

//         // const transaction = new Transaction().add(
//         //     SystemProgram.transfer({
//         //         fromPubkey: publicKey,
//         //         toPubkey: Keypair.generate().publicKey,
//         //         lamports: 1,
//         //     })
//         // );

//         // const signature = await sendTransaction(transaction, connection);

//         // await connection.confirmTransaction(signature, 'processed');
//     }, [publicKey, sendTransaction, connection]);

    return (
      <>
  
        <div style={{justifyContent: "center", display: "flex"}}>
        {/* <Calculator setTokens={setTokens}/>
        </div>
        <div style={{justifyContent: "center", display: "flex"}}>
        <Button onClick={() => onClick(tokens)} disabled={true}>
            Buy {tokens} token
        </Button> */}
        <Button onClick={checkNFTs} >
            Get NFTs
        </Button>
        </div>
        <div>
        {images.length > 0 ? images.map((obj, i) => (<div><h3 key={i}>{obj.name}</h3><img src={obj.src} width={100} /></div>)): message}
        </div> 
        {/* <p id="result" style={{color: "white"}}></p> */}
        </>
        
    ); // <img src={obj.data} width={100} />
};