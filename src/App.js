import Routers from "./Routes";
import React, { useState, useEffect } from "react";
import "react-datepicker"
import ProfileAPI from "./API/ProfileAPI";
import ProductAPI from "./API/ProductAPI";
function App() {
  const [profile, setProfile] = useState([])
  const [products , setProducts] = useState([])


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
  },[])

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await ProfileAPI.getAll()
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProfile()
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

  const onHandleDeleteProfile = async (id) => {
    try {
      await ProfileAPI.remove(id)
      const newProfile = profile.filter(item => item.id !== id)
      setProfile(newProfile)

    } catch (error) {
      console.log(error)

    }
  }
  const onUpdateProfile = async (id, pro) => {
    try {
      const { data } = await ProfileAPI.update(id, pro)
      const newProfile = profile.map(item => item.id === id ? data : item)
      setProfile(newProfile)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <Routers profile={profile} onDelete={onHandleDeleteProfile} onUpdate={onUpdateProfile} listProducts={products} onDeletePro={onHandleDeleteProducts}/>
    </div>
  );
}

export default App;
