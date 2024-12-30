// import React, { useState } from "react";
// import './product.scss'


// const Index = () => {
//   const [totalCartProduct, setTotalCartProduct] = useState('');

//   const handleAddToCart = () => {
//     // Add the product to the cart
//     // Update the cart count in the header
//     setTotalCartProduct()
//   }


//   return (
//     <>
//       <div className="container my-5">
//         <div className="row my-4">
//           <h4 className="text-center">Our Product</h4>
//         </div>
//         <div className="row">
//           <div className="col-sm-4">
//             <div className="card shadow-sm mb-3">
//               <img
//                 src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
//                 className="card-img-top"
//                 alt="..."
//                 style={{maxHeight:"350px"}}
//               />
//               <div className="card-body">
//                 <h5 className="card-title ">FAOES</h5>
//                 <p className="card-text my-3">Price :₹279</p>

//                 <div className="row my-2">
//                   <div className="col-sm-6">
//                     <buttn type="button" onclick={handleAddToCart}
//                       className="btn btn-warning ms-auto">
//                 Add To Cart
//                 </buttn>

//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                 <button type="button"  onclick={handleAddToCart} className="btn btn-primary">
//                  Buy
//                 </button>
//                 </div>
//                 </div>
        
                
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-4 mb-3">
//             <div className="card shadow-sm">
//               <img
//                 src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
//                 className="card-img-top"
//                 alt="..."
//                 style={{maxHeight:"350px"}}
//               />
//               <div className="card-body">
//                 <h5 className="card-title ">FAOES</h5>
//                 <p className="card-text my-3">Price :₹279</p>

//                 <div className="row my-2">
//                   <div className="col-sm-6">
//                   <a href="#" className="btn btn-warning ms-auto">
//                 Add To Cart
//                 </a>


               
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                 <a href="#" className="btn btn-primary">
//                  Buy
//                 </a>
//                 </div>
//                 </div>
        
                
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-4 mb-3">
//             <div className="card shadow-sm">
//               <img
//                 src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
//                 className="card-img-top"
//                 alt="..."
//                 style={{maxHeight:"350px"}}
//               />
//               <div className="card-body">
//                 <h5 className="card-title ">FAOES</h5>
//                 <p className="card-text my-3">Price :₹279</p>

//                 <div className="row my-2">
//                   <div className="col-sm-6">
//                   <a href="#" className="btn btn-warning ms-auto">
//                 Add To Cart
//                 </a>


               
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                 <a href="#" className="btn btn-primary">
//                  Buy
//                 </a>
//                 </div>
//                 </div>
        
                
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-4 mb-3">
//             <div className="card shadow-sm">
//               <img
//                 src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
//                 className="card-img-top"
//                 alt="..."
//                 style={{maxHeight:"350px"}}
//               />
//               <div className="card-body">
//                 <h5 className="card-title ">FAOES</h5>
//                 <p className="card-text my-3">Price :₹279</p>

//                 <div className="row my-2">
//                   <div className="col-sm-6">
//                   <a href="#" className="btn btn-warning ms-auto">
//                 Add To Cart
//                 </a>


               
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                 <a href="#" className="btn btn-primary">
//                  Buy
//                 </a>
//                 </div>
//                 </div>
        
                
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-4">
//             <div className="card shadow-sm mb-3">
//               <img
//                 src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
//                 className="card-img-top"
//                 alt="..."
//                 style={{maxHeight:"350px"}}
//               />
//               <div className="card-body">
//                 <h5 className="card-title ">FAOES</h5>
//                 <p className="card-text my-3">Price :₹279</p>

//                 <div className="row my-2">
//                   <div className="col-sm-6">
//                   <a href="#" className="btn btn-warning ms-auto">
//                 Add To Cart
//                 </a>


               
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                 <a href="#" className="btn btn-primary">
//                  Buy
//                 </a>
//                 </div>
//                 </div>
        
                
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-4">
//             <div className="card shadow-sm mb-3">
//               <img
//                 src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70"
//                 className="card-img-top"
//                 alt="..."
//                 style={{maxHeight:"350px"}}
//               />
//               <div className="card-body">
//                 <h5 className="card-title ">FAOES</h5>
//                 <p className="card-text my-3">Price :₹279</p>

//                 <div className="row my-2">
//                   <div className="col-sm-6">
//                   <a href="#" className="btn btn-warning ms-auto">
//                 Add To Cart
//                 </a>


               
//                 </div>
//                 <div className="col-sm-6 d-flex justify-content-end">
//                 <a href="#" className="btn btn-primary">
//                  Buy
//                 </a>
//                 </div>
//                 </div>
        
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;


// ======================================================



import React, { useState } from "react";
import './product.scss';
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [totalCartProduct, setTotalCartProduct] = useState(0); // Store number of products in cart
  console.log("Total Cart Product", totalCartProduct);
  // Define an array of product objects
  const products = [
    {
      id: 1,
      name: 'FAOES T-Shirt',
      price: 279,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=70',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 499,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=71', // replace with actual image link
    },
    {
      id: 3,
      name: 'Product 3',
      price: 699,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=72', // replace with actual image link
    },
    {
      id: 4,
      name: 'Product 4',
      price: 1299,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=73', // replace with actual image link
    },
    {
      id: 5,
      name: 'Product 5',
      price: 1799,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=73', // replace with actual image link
    },
    {
      id: 6,
      name: 'Product 6',
      price: 1899,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/w/j/l-t2-z3-autna-original-imaggzhzxyjpnyjv.jpeg?q=73', // replace with actual image link
    },
    // Add more products as needed
  ];

  const handleAddToCart = () => {
    // Add the product to the cart (example logic)
    setTotalCartProduct(totalCartProduct + 1);
  };
  const navigate = useNavigate();

  const handleBuyProduct = () => {
    navigate('/product-billing')
  }




  return (
    <>
      <div className="container my-5">
        <div className="row my-4">
          <h4 className="text-center">Our Products</h4>
        </div>
        <div className="row">
          <div className="col-sm-12">
          <h5 className="text-end my-4"> {totalCartProduct} Product Added in Cart</h5>
          </div>
        </div>
        <div className="row">
          {/* Map over the products array to dynamically create product cards */}
          {products.map(product => (
            <div key={product.id} className="col-sm-4 mb-3">
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ maxHeight: "350px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text my-3">Price: ₹{product.price}</p>

                  <div className="row my-2">
                    <div className="col-sm-6">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="btn btn-warning ms-auto"
                      >
                        Add To Cart
                      </button>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                      <button type="button" onClick={handleBuyProduct} className="btn btn-primary">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

