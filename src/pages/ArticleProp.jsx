import { useParams,Link } from "react-router-dom"
import { ArticleCard } from "../components"

export const ArticleProp = ({articles}) => {
    const { id } = useParams();
 
  return (
    <>
        <Link to='/' className="btn-back" type="button">{"< Back"}</Link>
        
        <ArticleCard id={id} articles={articles}/>
    </>
  )
}
