import Link from "next/link";

export default function index() {
  return (
    <>
      <h1>This is pre-rendering example</h1>
      <Link href="/pre-rendering/users">
        <a>Users Page</a>
      </Link>
      <br></br>
      <Link href="/pre-rendering/posts">
        <a>Posts Page</a>
      </Link>
      <br></br>
      <Link href="/pre-rendering/products">
        <a>Products Page</a>
      </Link>
      <br></br>
      <Link href="/pre-rendering/news">
        <a>News Page</a>
      </Link>
    </>
  );
}
