import Head from "next/head";

/*
 * Make all necessary imports.
 * Write the function getStaticProps.
 * Pass down your props to the component.
 * Render the data.
 */

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>All Posts</h1>
      <p>List of all posts</p>
      <ul></ul>
    </>
  );
}
