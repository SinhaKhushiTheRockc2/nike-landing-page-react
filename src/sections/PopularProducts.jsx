import { useState } from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import ProductDetails from "../components/ProductDetails";

const PopularProducts = () => {
  const [showProductDetails,setShowProductDetails]=useState(false);

  const [product,setProduct]=useState(null);
  const toggleProductDetailsVisibility=()=>{
    setShowProductDetails(prevState=>prevState?false:true);
  }

  const handleSetProduct=(id)=>{
    const product=products.filter((product)=>product.id===id);
    setShowProductDetails(true);
    setProduct(product);
  }

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h1>
        <p className="text-slate-gray font-montserrat lg:max-w-lg mt-2">Experience top-notch quality and style with our most-sought-after collections.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <div onClick={()=>handleSetProduct(product.id)} key={product.id}>
          <PopularProductCard {...product}/>
          </div>
        ))}
        {showProductDetails && <ProductDetails product={product} toggleProductDetailsVisibility={toggleProductDetailsVisibility}/>}
      </div>
    </section>
  )
}

export default PopularProducts
