export default function ArticleListByCategory({ articles, category }) {
  ///  debugger;
  return (
    <>
      <h1>News of {category}</h1>
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

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=rao"]);
  const { category } = params;
  const response = await (
    await fetch(`http://localhost:4000/news?category=${category}`)
  ).json();
  return {
    props: {
      articles: response,
      category,
    },
  };
}
