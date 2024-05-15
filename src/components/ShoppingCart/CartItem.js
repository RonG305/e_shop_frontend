import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center gap-4 justify-between border-b border-slate-300 py-2 px-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover"
      />

      <div>
        <p className="font-bold  text-slate-700">{item.name}</p>
        <p className=" text-slate-700">Quantity: 3</p>
        <p className=" text-slate-700">${item.price}</p>
        <button onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
