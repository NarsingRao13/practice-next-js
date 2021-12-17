import Link from "next/link";
function Products({ productId = 100 }) {
  return (
    <>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <h1>
        <Link href={"/routing/products/1"}>
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/routing/products/2"}>
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href={"/routing/products/3"} replace>
          <a>Product 3</a>
        </Link>
      </h1>{" "}
      <h1>
        <Link href={`/routing/products/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h1>
    </>
  );
}

export default Products;
