import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
    

  return (
    <div 
    className="popover fade show bs-popover-end absolute top-20 lg:top-24 bottom-40 inset-x-2 lg:left-auto lg:-right-16 lg:-mr-2 p-5 max-w-xl lg:max-w-sm lg:w-full mx-auto min-h-xs flex flex-col bg-white z-20 shadow-lg lg:shadow-xl rounded-lg"
    data-popper-placement="bottom"
    >
      <h3 className="font-bold pb-5">Cart</h3>
      <hr className="text-grayish-blue -mx-5" />
      <div
        className={
          "cart-content flex flex-col flex-1 items-center pt-5 " +
          (cartItems.length < 1 ? "justify-center" : "justify-start pt-6")
        }
      >
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div
                // key={item.title}
                className="item w-full flex items-center justify-between text-grayish-blue pb-5"
              >
                <img
                //   src={item.img}
                  alt="product-img"
                  className="w-14 h-14 rounded-lg "
                />
                <div className="px-3">
                  <p
                    // ref={productTitleRef}
                    className="product capitalize font-bold text-md"
                  >
                    {/* {item.title} */}
                  </p>
                  <div className="price">
                    <span>
                      {/* {item.price} x {total} */}
                    </span>
                    <span className="font-bold text-very-dark-blue">
                      {" "}
                      {/* ${(item.price.slice(1) * total).toFixed(2)} */}
                    </span>
                  </div>
                </div>
                <div className="delete">
                  <i 
                //   onClick={deleteItem} 
                  className="cursor-pointer">
                    <ion-icon name="trash-outline"></ion-icon>
                  </i>
                </div>
              </div>
            ))}
            <div className="checkout w-full">
              <button className="w-full h-14 bg-orange rounded-lg lg:rounded-xl mb-2 text-white flex items-center justify-center hover:opacity-60">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-dark-grayish-blue font-bold">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
