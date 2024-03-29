const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((cat) => {
        return (
          <button
            type="button"
            className="btn"
            key={cat}
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
