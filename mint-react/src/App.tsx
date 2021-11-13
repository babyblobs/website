import "./App.css";
import { useMemo } from "react";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getSolflareWallet,
  getPhantomWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";

const wallet1 = new anchor.web3.PublicKey(
  "9wtgVAJSngT3SAVVzPhfK3Ky3rptyLijVjvnJGNtgjrp"!
);

const wallet2 = new anchor.web3.PublicKey(
  "6eCZRr2DDgnwFQwNwmjn42jzHgKE2aJh1iKJqRZi36Cc"!
);

const wallet3 = new anchor.web3.PublicKey(
  "4fFKG8RenyJHQw83KAKVzs8cK1omCmjq4dqhYefaVn5h"!
);

const wallet4 = new anchor.web3.PublicKey(
  "HLs4LtJ5P7UiWgsUmJTR9Boh5zibvtaygx1ycFDZFj4u"!
);

const config = new anchor.web3.PublicKey(
  // 'HvZLA9tQ7peGwdQ9mBNHzU1A73BXDhRQ7DraKryB5YPi'!
  "HvZLA9tQ7peGwdQ9mBNHzU1A73BXDhRQ7DraKryB5YPi"!
);

const candyMachineId = new anchor.web3.PublicKey(
  // 'HoGbmXCFxtSMWvnWfWMp6irh21w6BRHpBeV7LTQCjHDj'!
  "HoGbmXCFxtSMWvnWfWMp6irh21w6BRHpBeV7LTQCjHDj"!
);

const network = "mainnet-beta" as WalletAdapterNetwork;

const rpcHost = "https://solana.genesysgo.net/"!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt("1635883200000"!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getSolflareWallet(), getPhantomWallet(), getSolletWallet()],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <Home
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              wallet1={wallet1}
              wallet2={wallet2}
              wallet3={wallet3}
              wallet4={wallet4}
              txTimeout={txTimeout}
            />
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
