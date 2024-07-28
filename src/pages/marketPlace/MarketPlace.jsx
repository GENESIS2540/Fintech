import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import CustomerAccount from './CustomerAccount';
import { Input } from 'antd';
import FilterPopOver from './FilterPopOver';
import { AlignJustify, Search } from 'lucide-react';
import { departments, marketPlaceProducts, shoppingIdeas } from './data';
import CustomButton from '../../Common/Button';

const MarketPlace = () => {
  const handleClick = (value) => {
    console.log(value);
  };

  const handleAddToCart = () => {
    
  }
  const numItemsInCart = 1;
  return (
    <div className="">
      <nav className="grid grid-cols-5 h-20  bg-white p-4">
        <p className="font-bold text-2xl text-primary">Genesis Market Place</p>
        <div className="col-span-2 mx-5 border-2 h-12 rounded-md border-gray-300 flex relative">
          <FilterPopOver />
          <Input
            placeholder="Search Genesis Market Place"
            className="pl-[70px] bordr-2 border-primary rounded-md bg-white"
          />
          <div className="absolute right-0 cursor-pointer p-2 rounded-md h-full bg-primary/30 hover:bg-primary/50 flex items-center justify-center">
            <Search className="size-6" />
          </div>
        </div>

        <CustomerAccount />
        <div className="flex justify-self-end relative justify-center  hover:border p-2 cursor-pointer items-center">
          <p className="bg-red-500 text-white text-sm rounded-full flex justify-center items-center -right-1 top-0 h-5 w-5 absolute">
            {numItemsInCart}
          </p>
          <ShoppingCartOutlined className="text-4xl" />
        </div>
      </nav>
      <div className="flex px-4 h-10 items-center gap-4 w-full bg-gray-200">
        <div className="flex gap-1 p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          <AlignJustify />
          <p>All</p>
        </div>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Today's Deals
        </p>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Customer Service
        </p>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Gift Cards
        </p>
        <p className="p-1.5 transition-all duration-300 border hover:border hover:border-gray-400 cursor-pointer">
          Sell
        </p>
      </div>
      <div className="grid grid-cols-5 bg-white">
        <div className="p-4">
          <p className="font-semibold text-xl">Shopping Ideas</p>
          {shoppingIdeas.map((shop) => (
            <button
              className="grid my-2 hover:text-primary transition-all duration-200"
              key={shop.value}
              onClick={() => handleClick(shop.value)}
            >
              {shop.text}
            </button>
          ))}
          <p className="font-semibold text-xl">Departments </p>
          {departments.map((department) => (
            <button
              className="grid my-2 hover:text-primary transition-all duration-200"
              key={department.value}
              onClick={() => handleClick(department.value)}
            >
              {department.text}
            </button>
          ))}
        </div>
        <div className="col-span-4">
          <p className="font-semibold text-primary text-xl py-3">
            Welcome to our Market Place
          </p>
          <div className="grid w-full gap-5 grid-cols-4">
            {marketPlaceProducts.map((product) => (
              <div
                className="grid h-max border border-zinc-300 rounded-md"
                key={product.userId}
              >
                <img
                  className="h-[200px] w-full border rounded-t-md"
                  src={product.image[0]}
                  alt={product.nameOfProduct}
                />
                <p className="hover:text-primary leading-6 font-medium px-2 cursor-pointer  transition-all duration-200">
                  {product.nameOfProduct} {product.shortDescription}
                </p>
                <p className="font-semibold text-black/90 flex text-2xl px-2">
                  <span className="text-[12px] align-top">$</span>
                  {product.price}
                </p>
                <p className="px-2 text-sm cursor-pointer hover:opacity-80">
                  {product.shipping}
                </p>
                <p className="text-red-600 text-sm font-semibold px-2">
                  Only {product.numberInStock} left instock - order soon.
                </p>
                <CustomButton onClick={handleAddToCart} className="m-2 rounded-[30px] bg-primary/90">
                  Add to cart
                </CustomButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
