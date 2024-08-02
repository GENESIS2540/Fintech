import { Divider } from 'antd';
import React, { useState, useContext } from 'react';
import CartItem from './CartItem';
import CustomButton from '../../../Common/Button';
import { CartContext } from '../../../context';

const Cart = () => {
  const { cartItems, handleRemoveFromCart, handleClearCart } =
    useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(productId)) {
        return prevSelectedItems.filter((id) => id !== productId);
      } else {
        return [...prevSelectedItems, productId];
      }
    });
  };

  const totalCartItemsSelected = selectedItems.length;

  const totalCostOfSelectedItems = selectedItems
    .reduce((total, productId) => {
      const item = cartItems.find(
        (item) => item?.product?.userId === productId
      );
      return item ? total + item.product.price * item.quantity : total;
    }, 0)
    .toFixed(2);

  return (
    <div className="p-4 grid grid-cols-4 gap-2 bg-[#f7f7f7]">
      <div className="grid bg-white p-2 rounded-xl col-span-3">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Shopping Cart</p>
          <button
            onClick={handleClearCart}
            className="text-primary font-medium"
          >
            Deselect all items
          </button>
        </div>
        <p className="text-right opacity-80">Price</p>
        <Divider />
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item?.product?.userId || Math.random()} // Provide a fallback key in case item.product.userId is undefined
              className="border border-gray-300 p-2 rounded grid gap-2 mb-3"
            >
              <CartItem
                key={item?.product?.userId || Math.random()}
                image={item?.product?.image?.[0]}
                name={item?.product?.nameOfProduct}
                inStock={item?.product?.numberInStock > 0}
                description={item?.product?.shortDescription}
                quantity={item?.quantity}
                price={item?.product?.price}
                size={item?.size}
                color={item?.color}
                isChecked={selectedItems.includes(item?.product?.userId)}
                handleCheckboxChange={() =>
                  handleCheckboxChange(item?.product?.userId)
                }
                handleRemoveFromCart={() =>
                  handleRemoveFromCart(item?.product?.userId)
                }
              />
            </div>
          ))
        )}
      </div>
      <div className="space-y-4">
        <div className="border h-max bg-white rounded-xl p-2 grid gap-2">
          <p className="font-medium text-xl">
            Subtotal({totalCartItemsSelected}):{' '}
            <span className="font-semibold">${totalCostOfSelectedItems}</span>
          </p>
          <CustomButton className="rounded-[30px] bg-complementary">
            Proceed to Checkout
          </CustomButton>
        </div>
        <div className="flex gap-2 bg-white p-2 rounded-xl border">
          <img src="" alt="" />
          <div className="grid">
            <p className="font-semibold text-sm">
              Genesis offers deliveries around the world. Click the button below
              to explore our shipping services.
            </p>
            <CustomButton className="rounded-[30px] bg-complementary">
              Genesis Shipping Services
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
