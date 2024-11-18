const ProductDetails = ({ product, toggleProductDetailsVisibility }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
          <button
            onClick={toggleProductDetailsVisibility}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-xl font-bold"
          >
            X
          </button>
  
          <div className="flex flex-col md:flex-row gap-6 p-2">
            <div className="flex-shrink-0">
              <img
                src={product[0].imgURL}
                alt={product[0].name}
                className="rounded-lg object-cover shadow-md" width={350} height={350}
              />
            </div>

            <div className="flex-grow">
              <h1 className="text-3xl font-semibold text-gray-800">{product[0].name}</h1>
              <p className="text-2xl text-coral-red font-bold mt-2">{product[0].price}</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Nike shoes are a global icon of performance, style, and innovation. Renowned for their cutting-edge technology and sleek designs, Nike shoes cater to athletes and casual wearers alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  