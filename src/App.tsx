import { Navigation } from "./components/Navigation"
import { Slider } from "./components/Slider"
import { categories } from "./data/categories"
import { slides } from "./data/slides"

function App() {

  return (
    <div className="min-h-screen">
      <Navigation categories={categories} />
      <Slider slides={slides} autoPlay interval={5000} />
    </div>
  )
}

export default App
