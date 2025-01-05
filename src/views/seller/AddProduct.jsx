import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 2,
      name: "Mobile",
    },
    {
      id: 3,
      name: "Laptop",
    },
    {
      id: 4,
      name: "Clothes",
    },
    {
      id: 5,
      name: "Shoes",
    },
    {
      id: 6,
      name: "Accessories",
    },
    {
      id: 7,
      name: "Sports",
    },
  ];
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    brand: "",
    stock: "",
    discount: "",
    description: "",
  });
  const [catShow, setCatShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCatergories, setAllCatergories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const categorySearch = (e) => {
    const value = e.target.value; // search value
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

              <div className="relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCatShow(!catShow)}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 mb-2"
                  placeholder="Category Name"
                  name="category"
                  value={category}
                />
                <div
                  className={`absolute rounded-md top-[101%] bg-slate-400 w-full transition-all ${
                    catShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      onChange={categorySearch}
                      className="px-2 py-1 focus:border-indigo-500 border border-gray-700 rounded-md w-full outline-none bg-transparent"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                    {allCatergories.map((cat, i) => (
                      <span
                        key={i}
                        onClick={() => {
                          setCatShow(false);
                          setCategory(cat);
                          setSearchValue("");
                          setAllCatergories(categories);
                        }}
                        className="px-4 py-2 hover:bg-slate-700 cursor-pointer"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
