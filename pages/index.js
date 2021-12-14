import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <h1>
        <Link href={"/blog"}>
          <a>Blog</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/products"}>
          <a>Products</a>
        </Link>
      </h1>
    </div>
  );
}
