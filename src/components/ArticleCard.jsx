export const ArticleCard = ({id,articles}) => {
  const article = articles.find(article => article.id === id);

  return (
    <div className="Article-one">
      <img src={article.image} alt={article.title} className="img-Art-one"/>
       <div className="body-art-one">
          <h1>{article.title}</h1>
          <p>{article.articulo}</p>
       </div>
    </div>
  )
}
