
/*
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
*/

/*

// Imports
// ========================================================
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
// SIWE Integration
//import { WagmiConfig, createClient, configureChains } from "wagmi";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
//import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
//import { publicProvider } from "wagmi/providers/public";


import { usePublicClient } from 'wagmi'

import {
  polygon,
  polygonMumbai,
  mainnet,
  goerli,
} from "wagmi/chains";



//import { WagmiConfig } from "wagmi";
//import { configureChains } from 'wagmi';

///import { configureChains, createClient, WagmiConfig } from "wagmi";

//import { WagmiConfig, createConfig } from 'wagmi'
import { createPublicClient, http } from 'viem'



import { publicProvider } from "wagmi/providers/public";

//const publicClient = usePublicClient()
*/

// Config
// ========================================================
/**
 * Configure chains supported
 */

/*
const { provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);
*/

/*
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli, polygon, polygonMumbai],
  [publicProvider()]
);
*/




/**
 * Configure client with providers and allow for auto wallet connection
 */

/*
const client = createClient({
  autoConnect: true,
  provider,
});
*/
/*
const client = createClient({
  provider,
  webSocketProvider,
})
*/


/*
const client = createConfig({
  autoConnect: true,
  provider,
});
*/

/*
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient
})
*/

/*
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  })
})
*/


/*
const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimChainChangedDisconnect: false,
      },
    }),
  ],
  provider,
});
*/


import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
///import { WagmiConfig, createClient, configureChains, chain } from "wagmi"
import { WagmiConfig, createClient, configureChains, Chain } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import "./styles.css"


/*
export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
)
*/
export const { chains, provider } = configureChains(
  [Chain.mainnet, Chain.polygon, Chain.optimism, Chain.arbitrum],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  provider,
})

// const foo: number = 'hello' as any // Typescript is fine with this



// App Wrapper Component
// ========================================================
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
};

// Exports
// ========================================================
export default api.withTRPC(MyApp);





/*
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import "./styles.css"
import { WagmiProvider } from "wagmi"

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiProvider>
  )
}
*/