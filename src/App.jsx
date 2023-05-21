import { useState } from 'react'
import './App.css'
import { ArticleList, Buttons, Hero } from './components'
import data from './data/data'
import { ArticleProp } from './pages/ArticleProp'
import {
  BrowserRouter,
  Route,createHashRouter,RouterProvider,Routes} from "react-router-dom";


function App() {

  const allCategories=['All', ...new Set(data.map(article=> article.category))]
  const [categories, setCategories] = useState(allCategories)
  const [articles, setArticles] = useState(data)
  
  
  const filterCategory= (category)=>{
    if (category=='All') {
      setArticles(data) 
      return
    }
    const filterData = data.filter(article=>article.category===category)
    setArticles(filterData)
  }
  const router= createHashRouter([
    {
      path:"/",
      element:[<Hero/>,<Buttons categories={categories} filterCategory={filterCategory}/>,<ArticleList articles={articles}/>]
    },
    {
      path:"/article/:id",
      element:<ArticleProp articles={articles} />
    }
  ])
  return (
    <>
     {
      <RouterProvider router={router}/>
     }
    </>
  )
}

export default App
