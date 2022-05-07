import Image from "next/image";
import React from "react";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <div className="animate-pulse flex flex-col justify-center items-center mt-16 w-full">
        <Image layout="intrinsic" src="/404.svg" height={300} width={300} />
        <h1 className="text-red-900 text-2xl">OPSS... Not found</h1>
      </div>
    </>
  );
}
