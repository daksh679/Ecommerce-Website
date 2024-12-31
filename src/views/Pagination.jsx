import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumer,
  totalItems,
  perPage,
  showItem,
}) => {
  let totalPages = Math.ceil(totalItems / perPage);
  let startPage = pageNumber;

  let dif = totalPages - pageNumber;
  if (dif < showItem) {
    startPage = totalPages - showItem;
  }
  let endPage = startPage < 0 ? showItem : startPage + showItem;
  if (startPage < 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const buttons = [];
    for (let i = startPage; i < endPage; i++) {
      buttons.push(
        <li
          key={i}
          onClick={() => setPageNumer(i)}
          className={`w-[33px] h-[33px] flex justify-center items-center rounded-full cursor-pointer ${
            pageNumber === i ? "bg-indigo-500 text-white" : ""
          }`}
        >
          {i}
        </li>
      );
    }
  };
  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumer(pageNumber - 1)}
          className="w-[33px] h-[33px] flex justify-center items-center rounded-full cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
