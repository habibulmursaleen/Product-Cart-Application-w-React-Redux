import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/actions";
import "../../styles/output.css";

const InputForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    productName: "",
    category: "",
    imageUrl: "",
    price: 0,
    quantity: 0,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch addProduct action with product object
    dispatch(addProduct(product));
    // clear form
    setProduct({
      productName: "",
      category: "",
      imageUrl: "",
      price: 0,
      quantity: 0,
    });
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              name="productName"
              type="text"
              value={product.productName}
              required
              onChange={handleInput}
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="category"
              value={product.category}
              required
              onChange={handleInput}
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="imageUrl"
              value={product.imageUrl}
              required
              onChange={handleInput}
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="price"
                value={product.price}
                required
                onChange={handleInput}
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="quantity"
                value={product.quantity}
                required
                onChange={handleInput}
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
