import React, { useRef } from "react";
import classes from "./BookShow.module.scss";

function BookShow({ onBook, schedule, show }) {
  const nameRef = useRef();
  const addressRef = useRef();
  const pincodeRef = useRef();

  const confirmOrderHandler = function () {
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const pincode = pincodeRef.current.value;

    if (
      name.trim().length === 0 ||
      address.trim().length === 0 ||
      pincode.trim().length === 0
    ) {
      return;
    }

    const userOrder = {
      name,
      address,
      pincode,
      show,
      day: schedule?.days[0],
      time: schedule?.time,
    };

    localStorage.setItem(`${name}-order`, JSON.stringify(userOrder));

    onBook();
  };

  return (
    <div className={classes["book-show"]}>
      <div onClick={() => onBook()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <h2 className={classes["form-header"]}>Cofirm order</h2>

      <form
        className={classes["form"]}
        onSubmit={(e) => {
          e.preventDefault();
          confirmOrderHandler();
        }}
      >
        <div className={classes["booked-show"]}>
          <label>
            <p className={classes["order-text"]}>
              Please confirm your order for:
            </p>
            <div className={classes["show-details"]}>
              <p className={classes["show-name"]}>{show}</p>
              <p className={classes["show-timings"]}>
                {schedule?.days[0]} {schedule?.time}
              </p>
            </div>
          </label>
          <input type="checkbox" required />
        </div>

        <input ref={nameRef} type="text" placeholder="fullname" required />
        <input ref={addressRef} type="address" placeholder="address" required />
        <input ref={pincodeRef} type="pincode" placeholder="pincode" required />

        <button>Cofirm</button>
      </form>
    </div>
  );
}

export default BookShow;
