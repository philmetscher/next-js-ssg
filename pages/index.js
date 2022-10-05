import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <h1>My blog</h1>
      <Navigation>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </Navigation>
    </>
  );
}

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`;
