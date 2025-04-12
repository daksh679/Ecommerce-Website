import React, { use, useEffect, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const EditProduct = () => {
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
  const [allCatergories, setAllCatergories] = useState(categories);
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [showImage, setShowImage] = useState([]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value); // search value
    if (value) {
      let searchResult = allCatergories.filter(
        (cat) => cat.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      console.log(searchResult);
      setAllCatergories(searchResult);
    } else {
      setAllCatergories(categories);
    }
  };

  const handleImageInput = (e) => {
    const files = e.target.files;
    const length = files.length;
    console.log(files);
    console.log(length);
    if (length > 0) {
      setImages([...images, ...files]);
      let imageURL = [];
      for (let i = 0; i < length; i++) {
        imageURL.push({ url: URL.createObjectURL(files[i]) });
        setShowImage([...showImage, ...imageURL]);
      }
    }
  };

  const changeImage = (img, i) => {
    if (img) {
      const tempURL = showImage;
      const tempImages = images;
      tempURL[i] = { url: URL.createObjectURL(img) };
      tempImages[i] = img;

      setImages([...tempImages]);
      setShowImage([...tempURL]);
    }
  };

  const RemoveImage = (i) => {
    const filterImages = images.filter((img, index) => index !== i);
    const filterImagesURL = showImage.filter((img, index) => index !== i);

    setImages([...filterImages]);
    setShowImage([...filterImagesURL]);
  };

  useEffect(() => {
    setProduct({
      name: "Iphone 12",
      price: "1200",
      brand: "Apple",
      stock: "100",
      discount: "10",
      description: "This is a very good phone",
    });
    setCategory("Mobile");
  }, [showImage]);

  return (
    <div className=" left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="lg:ml-[260px] lg:w-[calc(100%-260px)]">
        <div className="w-full bg-[#f5f5f5] rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl font-semibold">Edit Product</h1>
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

              {/* Category Search and Input */}
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
                      value={searchValue}
                      onChange={categorySearch}
                      className="px-2 py-1 focus:border-indigo-500 border border-gray-700 rounded-md w-full outline-none bg-transparent"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-y-scroll overflow-x-scroll">
                    {allCatergories.map((cat, i) => (
                      <span
                        key={i}
                        onClick={() => {
                          setCatShow(false);
                          setCategory(cat.name);
                          setSearchValue("");
                          setAllCatergories(categories);
                        }}
                        className={`px-4 py-2 text-white hover:bg-slate-700 cursor-pointer w-full ${
                          category === cat.name && "bg-indigo-500"
                        }`}
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <label htmlFor="price">Price</label>
              <input
                name="price"
                onChange={handleInputChange}
                value={product.price}
                type="number"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                placeholder="Enter Price"
              />
            </div>
            <div>
              <label htmlFor="brand">Brand Name</label>
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
              <label htmlFor="discount">Discount</label>
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
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full mb-4">
            {showImage.map((u, i) => (
              <div className="h-[180px] relative">
                <label htmlFor={i}>
                  <img
                    src={u.url}
                    alt=""
                    className="w-full h-full rounded-md "
                  />
                </label>
                <input
                  onChange={(e) => changeImage(e.target.files[0], i)}
                  type="file"
                  className="hidden"
                  name=""
                  id={i}
                />
                <span
                  onClick={() => RemoveImage(i)}
                  className="z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 top-1 right-1 absolute rounded-full text-white"
                >
                  <IoCloseCircle />
                </span>
              </div>
            ))}
            <label
              htmlFor="image"
              className="flex justify-center items-center flex-col cursor-pointer border border-dashed border-slate-600 hover:border-red-500 w-full h-[180px]"
            >
              <IoMdImages />
              <span>Select Image</span>
            </label>
            <input
              multiple
              type="file"
              id="image"
              className="hidden"
              onChange={handleImageInput}
            />
          </div>
          <div className="flex justify-start items-center">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
