import React, { useState } from "react";
import "./App.css";
// import Footer from "./Footer";
import stockImage from "./images/stock.png";
import initFontAwesome from "./initFontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
initFontAwesome();

function App() {
  const [purchasePrice, setpurchasePrice] = useState("");
  const [stockQuantity, setstockQuantity] = useState("");
  const [currentPrice, setcurrentPrice] = useState("");
  const [output, setoutput] = useState("");

  function Check(e) {
    e.preventDefault();
    let CP = purchasePrice;
    let Quantity = stockQuantity;
    let SP = currentPrice;
    if (!isNaN(CP) && !isNaN(Quantity) && !isNaN(SP)) {
      CP = Number(CP);
      Quantity = Number(Quantity);
      SP = Number(SP);
      if (CP > 0 && Quantity > 0 && SP > 0) {
        if (CP > SP) {
          const loss = ((CP - SP) * Quantity).toFixed(2);
          const lossPer = (((CP - SP) * 100) / CP).toFixed(2);
          setoutput(`You lost ${lossPer}%. Your total loss is ₹${loss}`);
        } else {
          const profit = ((SP - CP) * Quantity).toFixed(2);
          const profitPer = (((SP - CP) * 100) / CP).toFixed(2);
          setoutput(
            `You gained ${profitPer}%. Your total profit is ₹${profit}`
          );
        }
      } else {
        setoutput(
          <p>
            Please enter values greater than 0 ,only numbers are allowed in
            above fields
          </p>
        );
      }
    } else {
      setoutput(
        <p>
          Please enter values greater than 0 ,only numbers are allowed in above
          fields
        </p>
      );
    }
  }
  return (
    <div>
      <div className="App">
        <form onSubmit={Check}>
          <h1>Check Profit/Loss on your Stock</h1>
          <h3>Purchase Price</h3>
          <input
            placeholder="Enter Cost Price of Stock"
            required
            value={purchasePrice}
            onChange={(e) => setpurchasePrice(e.target.value)}
          />
          <h3>Stock Quantity</h3>
          <input
            placeholder="Enter Quantity of Stock"
            required
            value={stockQuantity}
            onChange={(e) => setstockQuantity(e.target.value)}
          />
          <h3>Current Price</h3>

          <input
            placeholder="Enter Current Price of Stock"
            required
            value={currentPrice}
            onChange={(e) => setcurrentPrice(e.target.value)}
          />
          <button type="submit">Check</button>
        </form>
        <h2>{output}</h2>
        <img className="stockImage" alt="" src={stockImage} />
      </div>
      <footer>
        <div class="footer">
          <h2>Connect with me on</h2>
          <a href="https://www.linkedin.com/in/prathmeshjagtap">
            {/* <h1>LinkedIN</h1> */}
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "linkedin"]}
              size="2x"
            />
          </a>
          <a href="https://twitter.com/prathmesh_20">
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "twitter"]}
              size="2x"
            />
          </a>
          <a href="https://www.instagram.com/prathmesh_jagtap_/">
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "instagram"]}
              size="2x"
            />
          </a>
          <a href="https://github.com/prathmeshjagtap">
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "github"]}
              size="2x"
            />
          </a>
          <a href="https://prathmesh-jagtap.netlify.app/">
            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" />
          </a>

          <h5>© 2021 | prathmesh | Privacy Policy</h5>
        </div>
      </footer>
    </div>
  );
}

export default App;
