import React from "react";
import Router from "next/router";
import { NextPage, NextPageContext } from "next";
import { setCookie } from "nookies";

const Callback: NextPage = () => {
  return <div />;
};

Callback.getInitialProps = async (ctx: NextPageContext) => {
  const { access_token } = ctx.query;
  if (Array.isArray(access_token)) {
    return {};
  }

  setCookie(ctx, "token", access_token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "http://localhost:3000/" });
    ctx.res.end();
  } else {
    Router.push("/");
  }

  return {};
};

export default Callback;
