import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <div>
        <h1>
          {product.id} - {product.title} = {product.price}
        </h1>
        <hr></hr>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const product = await response.json();

  if (!product.id) {
    return {
      notFound: true,
    };
  }

  console.log(
    `Generating page for /pre-rendering/products/${params.productId}`
  );
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
  console.log("Generating / Regenerating at product ");
  const paths = products.map((product) => {
    return {
      params: {
        productId: `${product.id}`,
      },
      revalidate: 10,
    };
  });

  return {
    //paths,
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    fallback: true,
  };
}
