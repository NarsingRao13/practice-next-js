import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <>
      <h1>Products List</h1>
      {products.map((product) => {
        return (
          <>
            <Link href={`/pre-rendering/products/${product.id}`}>
              <a>
                <div key={product.id}>
                  <h1>
                    {product.id} - {product.title} = {product.price}
                  </h1>
                </div>
              </a>
            </Link>
          </>
        );
      })}
      <Link href={`/pre-rendering/products/events`}>
        <a>Events (Client side data fetching demo)</a>
      </Link>
      <br></br>
    </>
  );
}
export async function getStaticProps() {
  console.log("Generating / Regenerating ");
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
