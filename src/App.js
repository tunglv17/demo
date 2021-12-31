import Routers from "./Routes";
import React, { useState, useEffect } from "react";
import "react-datepicker"
import ProductAPI from "./API/ProductAPI";
function App() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await ProductAPI.getAll();
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])


  const onHandleDeleteProducts = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProduct = products.filter(item => item.id !== id);
      setProducts(newProduct)
    } catch (error) {
      console.log(error)
    }
  }
  const onUpdateProduct = async (id, pro) => {
    try {
      const { data } = await ProductAPI.update(id, pro)
      const newProduct = products.map(item => item.id === id ? data : item);
      setProducts(newProduct)
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleAddProduct = async (data) => {
    try {
      await ProductAPI.add(data)
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="">
      <Routers
        listProducts={products}
        onUpdatePro={onUpdateProduct}
        onDeletePro={onHandleDeleteProducts}
        onAddProduct={onHandleAddProduct} />
    </div>
  );
}

export default App;
