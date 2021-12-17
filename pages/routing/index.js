import { useRouter } from "next/router";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Clicked");
    router.push("/routing/products");
  };
  return (
    <div>
      <h1>This is home page</h1>
      <h1>
        <Link href={"/routing/blog"}>
          <a>Blog</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/routing/products"}>
          <a>Products</a>
        </Link>
      </h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
