import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.vegetable.name}
          <span className="badge badge-secondary">₹ {props.vegetable.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.vegetable.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className=" col-4">
        {props.vegetable.quantity * props.vegetable.price}
      </div>
    </div>
  );
}
