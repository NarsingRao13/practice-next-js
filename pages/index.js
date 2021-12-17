import Link from "next/link";

export default function index() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/pre-rendering">
        <a>Pre-rendering Page</a>
      </Link>
      <br></br>
      <Link href="/routing">
        <a>Routing Examples</a>
      </Link>
    </>
  );
}
