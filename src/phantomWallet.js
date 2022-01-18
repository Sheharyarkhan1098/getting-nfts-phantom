import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { SendOneLamportToRandomAddress } from "./sendTranaction";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const Wallet = () => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  const handleClick = () => {
    toast.warning("Disconnected", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      // getSlopeWallet(),
      // getSolflareWallet(),
      // getTorusWallet({
      //   options: { clientId: "Get a client ID @ https://developer.tor.us" },
      // }),
      // getLedgerWallet(),
      // getSolletWallet({ network }),
      // getSolletExtensionWallet({ network }),
    ],
    [network]
  );

  console.log(wallets, "wallets");

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="mx-auto cs"
          >
            <Card
              className="mx-auto"
              style={{
                borderRadius: "10px",
                width: "25rem",
                display: "flex",
                justifySelf: "center",
                // backgroundColor: "#1f1f1f",
                // border: "2px solid #27A1FB",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {" "}
                  <WalletMultiButton
                    style={{ fontSize: 15, backgroundColor: "#4e44ce" }}
                  />
                  <WalletDisconnectButton
                    onClick={handleClick}
                    style={{ fontSize: 15, backgroundColor: "#4e44ce" }}
                  />
                </Card.Title>
                {/* <Card.Title
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/image/Group.png"
                    style={{ float: "left", height: "45px", width: "45px" }}
                  />
                  <p
                    style={{ color: "white", marginTop: "10px" }}
                    className="ml-3"
                  >
                    {" "}
                    CODI Public Sale
                  </p>
                </Card.Title> */}
                <Card.Text>
                  <SendOneLamportToRandomAddress />
                </Card.Text>
                <Card.Text
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* <Card.Text>
                    <p style={{ color: "white", fontSize: "12px" }}>Max cap</p>
                    <p
                      style={{
                        color: "#27A1FB",
                        fontSize: "12px",
                        marginTop: "-19px",
                      }}
                    >
                      33 000 000 CODI
                    </p>
                  </Card.Text> */}
                  {/* <Card.Text>
                    <p style={{ color: "white", fontSize: "12px" }}>
                      <img
                        src="/image/Group.png"
                        style={{ height: "11px", marginTop: "-4px" }}
                      />
                      Access
                    </p>
                    <p
                      style={{
                        color: "#27A1FB ",
                        fontSize: "12px",
                        marginTop: "-19px",
                      }}
                    >
                      Public
                    </p>
                  </Card.Text> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
