import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { getProducts, deleteProduct } from "../services/products"
import { useAuth } from "../context/AuthContext"
import { searchProducts } from "../services/products"


const Home = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchText, setSearchText] = useState("")

  const { user } = useAuth()

  const fetchProducts = async () => {
    const response = await getProducts()
    const responseToJson = await response.json()

    if (response.ok) {
      setProducts(responseToJson.data)
      setFilteredProducts(responseToJson.data) // lista que se muestra
    }
  }


  const handleClick = async (id) => {
    if (confirm("¿Estás seguro que quieres borrar el producto?")) {
      const response = await deleteProduct(id)
      if (!response.ok) {
        alert("Error al borrar producto.")
      } else {
        alert("Producto borrado con éxito.")
        fetchProducts()
      }
    }
  }

  const handleSearch = async (text) => {
    const cleanText = text.trim()

    if (cleanText === "") {
      // Si el input está vacío, mostramos todo de nuevo
      setFilteredProducts(products)
      return
    }

    const response = await searchProducts(cleanText)
    const data = await response.json()

    if (response.ok) {
      setFilteredProducts(data.data)
    } else {
      alert("No se encontraron productos.")
    }
  }


  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Layout>
      <h1>Bienvenido a nuestra tienda de productos artesanales</h1>
      <p>Descubrí nuestra selección exclusiva de productos únicos hechos a mano. Calidad y diseño en cada detalle.</p>

      <section>
        <h2>Búsqueda de productos</h2>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchText}
          onChange={async (e) => {
            const value = e.target.value
            setSearchText(value)

            if (value.trim() === "") {
              setFilteredProducts(products)
            }
          }}
        />
        <button onClick={() => handleSearch(searchText)}>Buscar</button>
      </section>
      <section>
        {
          filteredProducts.map(product => (
            <div key={product._id}>
              <p><b>Nombre:</b> {product.name}</p>
              <p><b>Precio:</b> {product.price}</p>
              <p><b>Categoría:</b> {product.category}</p>
              {
                user && (
                  <div className="cont-button-product">
                    <button onClick={() => handleClick(product._id)}>Borrar</button>
                  </div>
                )
              }
            </div>
          ))
        }
      </section>
    </Layout>
  )
}

export { Home }
