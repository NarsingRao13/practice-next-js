export default function Post({ post }) {
  return (
    <>
      <div>
        <h1>
          {post.id} - {post.title} = {post.body}
        </h1>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /pre-rendering/posts/${params.postId}`);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    //paths,
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
    ],
    fallback: "blocking",
  };
}
