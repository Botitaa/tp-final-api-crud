const BASE_API = import.meta.env.VITE_BASE_API

const getProducts = async () => {
  const response = await fetch(BASE_API + "/products")
  return response
}

const createProduct = async ({ name, price, category }) => {
  const response = await fetch(BASE_API + "/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, category })
  })
  return response
}

const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_API}/products/${id}`, {
    method: "DELETE"
  })
  return response
}

const searchProducts = async (text) => {
  const response = await fetch(`${BASE_API}/products/search?text=${text}`)
  return response
}

export { getProducts, createProduct, deleteProduct, searchProducts }