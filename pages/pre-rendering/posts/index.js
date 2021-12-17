import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      <h1>Posts List</h1>
      {posts.map((post) => {
        return (
          <>
            <Link href={`/pre-rendering/posts/${post.id}`}>
              <a>
                <div key={post.id}>
                  <h1>
                    {post.id} - {post.title} = {post.body}
                  </h1>
                </div>
              </a>
            </Link>
          </>
        );
      })}
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
