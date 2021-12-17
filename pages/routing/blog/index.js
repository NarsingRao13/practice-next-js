import Link from "next/link";

function Blog() {
  return (
    <div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <h1>Blog page</h1>;
    </div>
  );
}

export default Blog;
