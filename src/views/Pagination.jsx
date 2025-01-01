import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
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
  if (dif <= showItem) {
    startPage = totalPages - showItem;
  }
  let endPage = startPage < 0 ? showItem : startPage + showItem;
  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const buttons = [];
    for (let i = startPage; i < endPage; i++) {
      buttons.push(
        <li
          className={`${
            pageNumber === i
              ? "bg-indigo-500 shadow-lg shadow-indigo-300/50 text-white"
              : "bg-slate-700 hover:bg-indigo-400 text-white shadow-lg hover:shadow-indigo-500/50"
          } w-[33px] h-[33px] flex justify-center items-center rounded-full cursor-pointer`}
          key={i}
          onClick={() => setPageNumer(i)}
        >
          {i}
        </li>
      );
    }
    return buttons;
  };
  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumer(pageNumber - 1)}
          className="w-[33px] h-[33px] flex justify-center items-center rounded-full cursor-pointer bg-slate-500"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPages && (
        <li
          onClick={() => setPageNumer(pageNumber + 1)}
          className="w-[33px] h-[33px] flex justify-center items-center rounded-full cursor-pointer bg-slate-500"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
