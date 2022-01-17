import React from "react";

export default function Product(props) {


  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.vegetables.name}
          <span class="badge badge-secondary">₹ {props.vegetables.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.vegetables.quantity}
          </button>
          <button type="button" class="btn btn-success" onClick={() => {props.incrementQuantity(props.index);
        }}>
            +
          </button>
        </div>
      </div>
      <div className=" col-4">
        {props.vegetables.quantity * props.vegetables.price}
      </div>
    </div>
  );
}
