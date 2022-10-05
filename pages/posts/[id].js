import Head from "next/head";

/*
 * Make all necessary imports.
 * Write the function getStaticPaths.
 * Write the function getStaticProps.
 * Pass down your props to the component.
 * Render the data.
 */

export default function Post() {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <h1>name of the post</h1>
      <p>ID:</p>
      <h2>Description</h2>
      <p></p>
    </>
  );
}
