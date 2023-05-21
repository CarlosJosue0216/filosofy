export const Buttons = ({categories,filterCategory}) => {
  return (
    <div className="categories">
        {categories.map(category=>(
            <button
            type="button"
            onClick={()=>filterCategory(category)}
            className="btn-category"
            key={category}
            >
                {category}
            </button>
        ))}
    </div>
  )
}
