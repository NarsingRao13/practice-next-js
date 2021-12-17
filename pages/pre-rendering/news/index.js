export default function NewsArticle({ articles }) {
  return (
    <>
      <h1>News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {article.id} - {article.title} = {article.category}
            <br></br>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await (await fetch("http://localhost:4000/news")).json();
  return {
    props: {
      articles: response,
    },
  };
}
