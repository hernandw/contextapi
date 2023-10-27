import { useContext } from "react"
import { ContextProduct } from "../ContextProduct"


const Home = () => {

    const { name, products } = useContext(ContextProduct)
  return (
    <div>
          <h1>Home</h1>
          <h2>mi nombre es {name}</h2>
          <div>
              {products.map((product) => (
                  <div key={product.id}>{product.title}</div>
              ))}
</div>

          
    </div>
  )
}

export default Home
