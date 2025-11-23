import { MomentsSection } from "./components/Moments"
import { Navigation } from "./components/Navigation"
import { ProductsSection } from "./components/Products"
import { Slider } from "./components/Slider"
import { categories } from "./data/categories"
import { moments } from "./data/moments"
import { products } from "./data/products"
import { slides } from "./data/slides"

function App() {

  return (
    <div className="min-h-screen">
      <Navigation categories={categories} />
      <Slider slides={slides} autoPlay interval={5000} />
      <ProductsSection products={products} />
      <MomentsSection moments={moments} />
    </div>
  )
}

export default App
