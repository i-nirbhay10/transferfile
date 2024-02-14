import React, { useEffect, useState } from "react";
import TopHeader from "../../../../UI/TopHeader/TopHeader";
import TextInputs from "./TextInputs";

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    designation: "",
    company: "",
    mobileNumber: "",
    email: "",
    address: "",
    gstNumber: "",
    leadSource: "",
  });

  const [leadSourceOptions] = useState([
    { value: "", label: "Select Lead Source" },
    { value: "Website", label: "Website" },
    { value: "Word of mouth", label: "Word of mouth" },
    { value: "Social Media", label: "Social Media" },
    { value: "Newspaper", label: "Newspaper" },
    { value: "Other", label: "Other" },
  ]);

  const handleInputchange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  console.log(formData);

  const [buyerName, setBuyerName] = useState("hello");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [leadSource, setLeadSource] = useState("");

  const [buyerType, setBuyerType] = useState(false);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [orderSummary, setOrderSummary] = useState([]);
  const [AllaTotal, setAllaTotal] = useState("");
  const [ShowBill, setShowBill] = useState(false);

  const [products, setProducts] = useState([
    { id: 0, name: "EcoSpark", price: 45000, quantity: 0 },
    { id: 1, name: "EcoPod", price: 9000, quantity: 0 },
  ]);

  useEffect(() => {
    setShowBill(false);
  }, [products]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
  };

  const handleAddBuyerClick = () => {
    // Handle logic for adding buyer information
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    } else {
      console.log("No file selected.");
    }
    console.log("Add Buyer button clicked", formData, buyerType);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[productId].quantity = newQuantity;
    setProducts(updatedProducts);

    const newTotal = products.reduce((acc, item) => {
      return acc + item.price * item.quantity;
      // return acc + Number(item.price) * Number(item.quantity);
    }, 0);

    setAllaTotal(newTotal);

    setProductName(products[productId].name);
    setProductQuantity(products[productId].quantity);
    setProductPrice(products[productId].price);

    console.log(products);
  };

  const handleAddProductClick = () => {
    setShowBill(true);
    console.log(productQuantity);
    const productDetails = {
      productName: productName,
      productPrice: productPrice,
      productQuantity: productQuantity,
    };
    // setOrderSummary([...orderSummary, productDetails]);
    setOrderSummary([productDetails]);

    console.log(orderSummary);
    // Clear product form fields after adding to order summary
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  };

  return (
    <>
      <div className="w-full">
        {/* Left Form for Buyer Information */}
        {/* <div className=""> */}
        <TopHeader className="" head={"New Order"} />
        <div className="md:flex justify-center">
          <div className=" p-5 w-full 2xl:w-3/4" style={{ marginTop: "25px" }}>
            <div className="md:flex gap-5">
              <div className="p-5 md:w-2/3 border border-[#C8BFBF] rounded-xl bg-white">
                <div className="text-lg text-[#6B6A6A] font-bold w-full">
                  Buyer Details
                </div>
                <div className=" w-auto gap-5">
                  <div className="md:flex gap-5 md:my-8 ">
                    <div className="w-full mb-8 md:mb-0">
                      <TextInputs
                        type={"text"}
                        title={"Buyer’s Name"}
                        name="buyerName"
                        value={formData.buyerName}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("buyerName", value)
                        }
                      />
                    </div>
                    <div className="w-full">
                      <TextInputs
                        type={"text"}
                        title={"Designation"}
                        name="designation"
                        value={formData.value}
                        placeholder="Designation"
                        onInputChange={(value) =>
                          handleInputchange("designation", value)
                        }
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-5 my-8 md:my-8">
                    <div className="w-full mb-8 md:mb-0">
                      <TextInputs
                        type={"text"}
                        title={"Compony"}
                        name="company"
                        value={formData.company}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("company", value)
                        }
                      />
                    </div>
                    <div className="w-full ">
                      <TextInputs
                        type={"text"}
                        title={"Mobile Number"}
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("mobileNumber", value)
                        }
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-5 my-8 md:my-8">
                    <div className="w-full mb-8 md:mb-0">
                      <TextInputs
                        type={"text"}
                        title={"Email"}
                        name="email"
                        value={formData.email}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("email", value)
                        }
                      />
                    </div>
                    <div className="w-full ">
                      <TextInputs
                        type={"text"}
                        title={"Address"}
                        name="address"
                        value={formData.address}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("address", value)
                        }
                      />
                    </div>
                  </div>

                  {/* <div className="md:flex">
                    <div className="mb-2  w-full">
                      <span className="mr-2 inline-block">Email-Id</span>
                      <input
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        name="email"
                        placeholder="Email-Id"
                        className="p-2 w-full border rounded-md border-blue-200 focus:border-blue-300"
                      />
                    </div>
                    <div className="mb-2 mx-2 w-full">
                      <span className="mr-2 inline-block">Address</span>
                      <input
                        type="text"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                        name="address"
                        placeholder="Address"
                        className="p-2 w-full border rounded-md border-blue-200 focus:border-blue-300"
                      />
                    </div>
                  </div> */}
                  <div className="md:flex items-center gap-5 my-8 md:my-8">
                    <div className="relative w-full mb-8 md:mb-0">
                      <span className="px-2 rounded-xl bg-white text-[#118615] align-center absolute  -top-3 left-4">
                        Lead source
                      </span>
                      <select
                        value={formData.leadSource}
                        className="p-2 w-full border rounded-lg border-1 border-[#B1B1B1] text-[#6A6A6A] "
                        onChange={(e) =>
                          handleInputchange("leadSource", e.target.value)
                        }
                      >
                        {leadSourceOptions.map((items, index) => (
                          <option key={index} value={items.value}>
                            {items.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="p-1 flex justify-between border border-[#B1B1B1] rounded-xl items-center w-full">
                      <div>
                        <span className="mr-2 ">Buyer Type :-</span>
                      </div>
                      <div>
                        <div>
                          <input
                            type="checkbox"
                            checked={buyerType}
                            onChange={() => setBuyerType(!buyerType)}
                            name="Individual"
                            className="mr-2"
                          />
                          <span htmlFor="buyerType">Company</span>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            checked={buyerType}
                            onChange={() => setBuyerType(!buyerType)}
                            name="Individual"
                            className="mr-2"
                          />
                          <span htmlFor="buyerType">Individual</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex items-center gap-5 my-8 md:my-8">
                    {/* <div className="relative w-full mb-8 md:mb-0">
                      <span className="px-2 rounded-xl bg-white text-sm text-[#118615] align-center absolute  -top-3 left-4">
                        Department
                      </span>
                      <select
                        value={formData.leadSource}
                        className="p-2 w-full border rounded-lg border-1 border-[#B1B1B1] text-[#6A6A6A] "
                        onChange={(e) =>
                          handleInputchange("leadSource", e.target.value)
                        }
                      >
                        {leadSourceOptions.map((items, index) => (
                          <option key={index} value={items.value}>
                            {items.label}
                          </option>
                        ))}
                      </select>
                    </div> */}

                    <div className="w-full mb-8 md:mb-0 w-full">
                      <TextInputs
                        type={"text"}
                        title={"GST No"}
                        name="address"
                        value={formData.gstNumber}
                        placeholder="Enter your GST No"
                        onInputChange={(value) =>
                          handleInputchange("gstNumber", value)
                        }
                      />
                    </div>
                    <div className="md:w-1/2">
                      <label className="text-[green]" htmlFor="pdfInput">
                        purchase order LIst{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          type="file"
                          id="pdfInput"
                          accept=".pdf"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* --------------------pdf upload--------------------- */}
                  <div className="md:flex items-center">
                    <div className="mt-3 mx-2 flex justify-center w-full">
                      <button
                        onClick={handleAddBuyerClick}
                        className="p-2 bg-[#118615] w-80 text-xl text-white rounded-md "
                      >
                        Add Buyer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Form for Product Information */}
              <div className="flex flex-col justify-between p-5 md:w-1/3 border border-[#C8BFBF] rounded-xl ">
                <div className="flex flex-col justify-between items-center h-full">
                  <img
                    className=""
                    src="/images/ordericon.png"
                    alt="logo"
                    srcSet=""
                  />
                </div>

                <div className="w-full ">
                  <div className="p-2 text-lg text-[#6B6A6A] font-bold w-full">
                    Products List
                  </div>
                  <div className="max-h-96 border border-[#C8BFBF] rounded-2xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-3 border-b border-[#C8BFBF] text-center rounded-t-2xl text-[#118615] text-sm bg-[#fff]">
                      <span className="p-1">Products</span>
                      <span className="p-1 border-x border-[#C8BFBF]">
                        Price
                      </span>
                      <span className="p-1">Qty.</span>
                    </div>
                    <div className=" overflow-auto ">
                      {products.map((item, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 text-center bg-[#EBF5EB] text-[#7E7E7E] h-8 rounded-xl my-2 mx-2"
                        >
                          <span className="flex justify-center items-center">
                            {item.name}
                          </span>
                          <span className="flex justify-center items-center">
                            {item.price}
                          </span>
                          <span className="flex justify-between items-center mx-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity === 0}
                              className={`px-1  bg-[#FF8686] text-white text-sm ${
                                item.quantity === 0
                                  ? "opacity-50 cursor-not-allowed"
                                  : "cursor-pointer"
                              }`}
                            >
                              -
                            </button>
                            <span className="px-1 mx-2">{item.quantity}</span>

                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="px-1 text-sm bg-green-500 text-white cursor-pointer"
                            >
                              +
                            </button>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <table className="w-full">
                    <thead className="">
                      <tr className="justify-start">
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>

                    {products.map((product) => (
                      <tbody key={product.id}>
                        <tr className="mt-4 text-center" key={product.id}>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  product.id,
                                  product.quantity - 1
                                )
                              }
                              disabled={product.quantity === 0}
                              className={`px-1 mr-2 bg-blue-500 text-white ${
                                product.quantity === 0
                                  ? "opacity-50 cursor-not-allowed"
                                  : "cursor-pointer"
                              }`}
                            >
                              -
                            </button>
                            <span className="px-1 mx-2">
                              {product.quantity}
                            </span>

                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  product.id,
                                  product.quantity + 1
                                )
                              }
                              className="px-1 ml-2 bg-green-500 text-white cursor-pointer"
                            >
                              +
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table> */}
                  <div className="mt-6 w-full flex justify-center ">
                    <button
                      onClick={handleAddProductClick}
                      className="p-2 bg-[#118615] w-full mx-10 text-white rounded-md "
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------- order summary------------------------- */}

            <div className="my-5">
              <h2 className="text-xl font-bold mb-2">Order Summary</h2>
              {
                // products.length > 0
                ShowBill ? (
                  <div className="">
                    <div className="max-h-96 border border-[#C8BFBF] rounded-2xl overflow-hidden shadow-sm">
                      <div className="grid grid-cols-4 border-b border-[#C8BFBF] text-center rounded-t-2xl text-[#118615] text-sm bg-[#fff]">
                        <span className="p-1">Products</span>
                        <span className="p-1 border-x border-[#C8BFBF]">
                          Price
                        </span>
                        <span className="p-1 ">Qty.</span>
                        <span className="p-1 border-l border-[#C8BFBF]">
                          Total
                        </span>
                      </div>
                      <div className=" overflow-auto ">
                        {products.map((item, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-4 text-center bg-[#EBF5EB] text-[#7E7E7E] h-8 rounded-xl my-2 mx-2"
                          >
                            <span className="flex justify-center items-center">
                              {item.name}
                            </span>
                            <span className="flex justify-center items-center">
                              {item.price}
                            </span>
                            <span className="flex justify-center items-center mx-2">
                              {item.quantity}
                            </span>
                            <span className="flex justify-center items-center">
                              ₹{item.price * item.quantity}/-
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mx-5 h-20">
                        <div className="md:ml-10 text-[#118615]">
                          {" "}
                          Final Amount
                        </div>
                        <div className="flex">
                          <div className="flex flex-col items-end md:mr-10 ">
                            <div>
                              <span className="text-[#118615]">
                                Sub Total -{" "}
                              </span>
                              <span> ₹{AllaTotal}/-</span>
                            </div>
                            <div>
                              <span className="text-[#118615]">
                                Sub Total with 18% GST -{" "}
                              </span>
                              <span>
                                ₹{AllaTotal + (AllaTotal * 18) / 100}/-
                              </span>
                            </div>
                          </div>
                          <div>
                            <button
                              className="p-2 bg-[#118615]  text-xl text-white rounded-md "
                              onClick={() => {
                                window.print();
                              }}
                            >
                              Generate bill
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <table className="w-full border-collapse border border-[#C8BFBF]">
                      <thead>
                        <tr className="bg-[#fff] text-green-500">
                          <th className="border border-[#C8BFBF] p-2">
                            Products
                          </th>
                          <th className="border border-[#C8BFBF] p-2">Price</th>
                          <th className="border border-[#C8BFBF] p-2">
                            Quantity
                          </th>
                          <th className="border border-[#C8BFBF] p-2">
                            Total/-
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((item, index) => (
                          <>
                            <tr key={index} className="border border-[#C8BFBF]">
                              <td className="border border-[#C8BFBF] p-4">
                                {item.name}
                              </td>
                              <td className="border border-[#C8BFBF] p-4">
                                {item.price}
                              </td>
                              <td className="border border-[#C8BFBF] p-4">
                                {item.quantity}
                              </td>
                              <td className="border border-[#C8BFBF] p-4">
                                {item.price * item.quantity}
                              </td>
                            </tr>
                          </>
                        ))}
                        <div className="flex justify-end w-full">
                          <div>
                            <div className="">Sub-Total : {AllaTotal}</div>
                            <div className="">
                              Total With 18% GST :{" "}
                              {AllaTotal + (AllaTotal * 18) / 100}
                            </div>
                          </div>
                        </div>
                      </tbody>
                    </table> */}
                  </div>
                ) : (
                  <div className=" p-5 border border-[#C8BFBF]">
                    <p>No products added to the order yet.</p>
                  </div>
                )
              }
            </div>

            {/* <div className="ml-8 my-5">
            <h2 className="text-xl font-bold mb-2">Order Summary</h2>
            {orderSummary.length > 0 ? (
              <table className="w-full border-collapse border border-blue-500">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border border-blue-500 p-2">Products</th>

                    <th className="border border-blue-500 p-2">Quantity</th>
                    <th className="border border-blue-500 p-2">Price</th>
                    <th className="border border-blue-500 p-2">Total/-</th>
                  </tr>
                </thead>
                <tbody>
                  {orderSummary.map((item, index) => (
                    <tr key={index} className="border border-blue-500">
                      <td className="border border-blue-500 p-4">
                        {item.productName}
                      </td>
                      <td className="border border-blue-500 p-4">
                        {item.productPrice}
                      </td>
                      <td className="border border-blue-500 p-4">
                        {item.productQuantity}
                      </td>
                      <td className="border border-blue-500 p-4">
                        {item.productPrice * item.productQuantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No products added to the order yet.</p>
            )}
          </div> */}

            {/* /--------------order summary end--------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateOrder;
