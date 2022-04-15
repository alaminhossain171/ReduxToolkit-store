import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <div className="d-flex justify-content-around align-items-center my-4 shadow p-4">
            <img src={item.image} alt={""} height={"80px"} />
            <h5>{item.title}</h5>
            <h6 className="mx-3">{item.price}</h6>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(remove(item.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
