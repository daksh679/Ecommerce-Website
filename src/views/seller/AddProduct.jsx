import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    brand: "",
    stock: "",
    discount: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full bg-[#f5f5f5] rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl font-semibold">Add Product</h1>
            <Link className="bg-blue-400 text-white px-3 py-1 rounded-sm">
              All Products
            </Link>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7">
            <div>
              <label htmlFor="">Product Name</label>
              <input
                onChange={handleInputChange}
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter Product Name"
                name="name"
                value={product.name}
              />

              <label htmlFor="">Category</label>
              <select
                className="w-full p-2 border border-slate-300 rounded-md mb-2"
                name="category"
                onChange={handleInputChange}
                value={product.category}
                id=""
              >
                <option value="">Select Category</option>
              </select>

              <label htmlFor="">Price</label>
              <input
                onChange={handleInputChange}
                value={product.price}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter Price"
              />
            </div>
            <div>
              <label htmlFor="">Brand Name</label>
              <input
                onChange={handleInputChange}
                value={product.brand}
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter Brand Name"
                name="brand"
              />

              <label htmlFor="">Product Stock</label>
              <input
                onChange={handleInputChange}
                value={product.stock}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter Product Stock"
                name="stock"
              />
              <label htmlFor="">Discount</label>
              <input
                onChange={handleInputChange}
                value={product.discount}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter Discount"
                name="discount"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Description</label>
            <textarea
              onChange={handleInputChange}
              value={product.description}
              cols="10"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Enter Description"
              name="description"
            ></textarea>
          </div>
          <div className="flex justify-start items-center">
            <img src="" alt="" />
            <input
              type="file"
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
          </div>
          <div className="flex justify-start items-center">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
