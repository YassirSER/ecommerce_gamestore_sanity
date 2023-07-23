"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { FaLock } from "react-icons/fa";
// import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { render } from "@react-email/render";
import Script from "next/script";

import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../context/stateContext";
import PaymentNotification from "../../emails/PaymentNotification";
import PurchaseNotificationForMe from "../../emails/PurchaseNotificationForMe";
import { LoadingSpinner } from "../../components/index";

export const NavigationBar = ({ setShowPage, router, isValid }) => (
  <div
    className="navigator"
    style={{ color: "#353B41", fontSize: "0.9rem", padding: "20px" }}
  >
    <span
      onClick={() => {
        router.push("/cart");
      }}
    >
      Cart
    </span>
    {" > "}
    <span
      onClick={() => {
        setShowPage({ clicked: "information" });
      }}
    >
      Information
    </span>
    {" > "}
    <span
      // color={isValid ? "grey" : "#f8f8f8"}
      style={{ color: isValid ? "#353B41" : "#C4C8CB" }}
      onClick={(e) => {
        if (isValid) {
          setShowPage({ clicked: "payment" });
        }
      }}
    >
      Payment
    </span>
  </div>
);

const Checkout = () => {
  const router = useRouter();
  const [showPage, setShowPage] = useState({ clicked: "information" });
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [token, setToken] = useState("");
  const [isValid, setIsValid] = useState(false);
  // const [createdOrderState, setCreatedOrderState] = useState()
  const [shouldProceed, setShouldProcceed] = useState({
    proceed: false,
    orderId: "",
    customer: {
      name: "",
      address: "",
      phone: "",
      zip_code: "",
      city: "",
      state: "",
      country_code: "",
      email: "",
    },
  });

  const validate =
    data.email.length !== 0 &&
    data.city.length !== 0 &&
    data.firstName.length !== 0 &&
    data.lastName.length !== 0 &&
    data.phoneNumber.length !== 0;

  const { cartItems, totalPrice, setOrder, order } = useStateContext();

  useEffect(() => {
    if (totalPrice === 0) {
      router.push("/");
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const { lastName, firstName, phoneNumber, email, city } = data;
    try {
      // On sumbitting the form we create an order with the information provided, this createOrder function could be anything, like talking to a shopify API, or a custom solution
      const createdOrder = await client.create({
        _type: "order",
        name: firstName + " " + lastName,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
        orderId: uuidv4(),
        status: "pending",
        price: totalPrice,
      });

      console.log(createdOrder);

      if (createdOrder) {
        // If the order was created successfully, we can create a token
        //for that order with the corresponding id
        setOrder(createdOrder);
        const res = await axios("/api/payment", {
          method: "POST",
          data: {
            orderId: uuidv4(),
            price: totalPrice,
            customer: {
              name: `${firstName} ${lastName}`,
              phone: phoneNumber,
              country_code: "MA",
              // i chose to provide empty values for the other fields
              // because I don't have any data to provide, they could
              // be anything else.
              city: city,
              email: email,
            },
          },
        });
        console.log(res);
        if (res.data.ok) {
          // after the token is created, we can show the user the payment form,
          // here we will only update the state, because there a
          // useEffect comming that will handle showing the payment form
          // depending on the state provided bellow.
          setToken(res.data?.data?.token);
          setShouldProcceed({
            proceed: true,
            orderId: "createdOrder.orderId",
            customer: {
              name: `${firstName} ${lastName}`,
              phone: phoneNumber,
              country_code: "MA",
              city: city,
              email: email,
            },
          });
          setLoading(false);
        } else {
          console.log(res.data.message);
          setLoading(false);
        }
      }
    } catch ({ errors }) {
      console.log("errors: ", errors);
      setLoading(false);
    }
  };

  useEffect(() => {
    let handlePay = async () => {
      // let ycPay = null;
      if (typeof window !== "undefined" && shouldProceed.proceed) {
        const ycPay = new YCPay(process.env.NEXT_PUBLIC_YCP_PUB_KEY, {
          locale: "fr",
          isSandbox: true,
          errorContainer: "#error-container",
          formContainer: "#payment-container",
        });

        // render the payment methods
        ycPay.renderAvailableGateways([], "default");
        console.log(ycPay);

        if (token?.length > 0) {
          if (document) {
            document
              ?.getElementById("pay")
              ?.addEventListener("click", function () {
                // Execute the payment, it is required to put the
                // created token in the tokenization step.
                setPayLoading(true);
                ycPay
                  .pay(token)
                  .then(async (payed) => {
                    // await onSubmitAfterPayment("Pay√©");
                    // setPayLoading(false);

                    let names = cartItems.map((item) => item.name + ",");
                    console.log(order);

                    await client
                      .patch(order._id)
                      .set({ status: "done" })
                      .commit();

                    await axios("api/email", {
                      method: "POST",
                      data: {
                        subject: "Purchase Status",
                        fromEmail: "digitalcity@hotmail.com",
                        toEmail: data.email,
                        html: render(<PaymentNotification order={order} />),
                      },
                    });

                    await axios("/api/email", {
                      method: "POST",
                      data: {
                        subject: "new product bought",
                        fromEmail: data.email,
                        toEmail: "digitalcitymaroc@hotmail.com",
                        html: render(
                          <PurchaseNotificationForMe
                            order={order}
                            names={names}
                          />
                        ),
                      },
                    });

                    router.push(`/order-complete?orderId=${order.orderId}`);
                  })
                  .catch((error) => {
                    toast.error(error?.errorMessage || "An error occured");
                    console.log(error);
                    setPayLoading(false);
                  });
              });
          }
        }
      }
    };
    handlePay();
  }, [token, shouldProceed.proceed]);
  return (
    <div className="checkout-container">
      {showPage.clicked === "information" && (
        <div className="checkout-info-container">
          <NavigationBar
            setShowPage={setShowPage}
            router={router}
            isValid={validate}
          />
          <div className="payment-info">
            <h1>Information</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <label>E-MAIL *</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>

          <div className="info-details-container">
            <h1>Payment Details</h1>
            <div className="labelandinput-container">
              <div style={{ flexDirection: "row", padding: "0" }}>
                <div>
                  <label>FIRST NAME *</label>
                  <input
                    type="text"
                    value={data.firstName}
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label>LAST NAME *</label>
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label>CITY *</label>
                <input
                  type="text"
                  value={data.city}
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                />
              </div>

              <div>
                <label>PHONE NUMBER *</label>
                <input
                  type="text"
                  value={data.phoneNumber}
                  onChange={(e) =>
                    setData({ ...data, phoneNumber: e.target.value })
                  }
                />
              </div>

              <button
                onClick={() => {
                  setShowPage({ clicked: "payment" });
                  onSubmit(data);
                }}
                className="checkout-info-button"
                disabled={!validate}
              >
                continue to payment
              </button>
            </div>
          </div>
        </div>
      )}

      {showPage.clicked === "payment" && (
        <div className="payment-page-container">
          <Script src="https://youcanpay.com/js/ycpay.js" />
          <NavigationBar
            setShowPage={setShowPage}
            router={router}
            isValid={isValid}
          />
          <div className="bigass-container">
            <div className="update-products-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div className="checkout-contact-container">
                  <div>
                    <span style={{ color: "gray" }}>Contact</span>
                    <span>{data.email}</span>
                  </div>
                  <p onClick={() => setShowPage({ clicked: "information" })}>
                    Change
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "130px",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: "gray" }}>Bill to</span>
                    <span>{data.city}</span>
                  </div>
                  <p onClick={() => setShowPage({ clicked: "information" })}>
                    Change
                  </p>
                </div>
              </div>
            </div>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className={!shouldProceed.proceed ? "hidden" : ""}
              >
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h1>Payment</h1>
                  <h4>All transactions are secure and encrypted</h4>
                </div>
                {payLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <div id="payment-container" style={{ width: "90%" }}></div>
                    <div id="error-container"></div>
                  </>
                )}
                <button id="pay" disabled={loading}>
                  <FaLock /> Pay
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="checkout-products-container">
        <h2 className="checkout-products-header">Products</h2>
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="checkout-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                  </div>
                  <div className="flex bottom">
                    <h4>{item.price}MAD</h4>
                  </div>
                </div>
              </div>
            ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "20px",
            }}
          >
            <h4>TOTAL: </h4>
            <p>{totalPrice}MAD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
