import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <>
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html,
        body,
        #__next {
          display: block;
          height: 100%;
          width: 100%;
          overflow: hidden;
          margin: 0;
        }

        html {
          font-size: 16px;
          background-color: #04040e;
        }

        body {
          font-size: 1rem;
        }
      `}
    />
    <Head>
      <title>{title}</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600"
        rel="stylesheet"
      />
    </Head>
    {children}
  </>
);

export default Layout;
