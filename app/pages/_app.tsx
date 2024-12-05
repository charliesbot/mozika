import React from "react";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-client";
import withApolloClient from "../lib/with-apollo-client";
import ModalProvider from "../components/Modal/Modal";

type Props = {
  pageProps: unknown;
  component: React.FC<unknown>;
  apolloClient: ApolloClient<unknown>;
};

class CustomApp extends App<Props> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(CustomApp);
