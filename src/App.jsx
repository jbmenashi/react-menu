import Menu from "./Menu"
import Title from "./Title"
import Categories from "./Categories"
import menu from "./data"
import { useState } from "react"

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ["all", ...tempSet]

const allCategories = ["all", ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (cat) => {
    console.log(cat)
    if (cat === "all") {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === cat)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
