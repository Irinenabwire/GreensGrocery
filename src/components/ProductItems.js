import React from "react";
import ReactDOM from "react-dom";
import "./apps.css";

class ProductItems extends React.Component {
  

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>GROCERY DEALS</h2>
        <div className="card-group mt-2" >
  <div className="card">
    <img className="card-img-top" src="https://tracidmitchell.com/wp-content/uploads/2011/09/bell-peppers.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-text">Capsicum.</h5>
      <p className="card-text">KES 20.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima3.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Egg Plant</h5>
      <p className="card-text">KES 40.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://i.pinimg.com/originals/a9/b3/30/a9b330800675bfa11265cdc831ffb282.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Guava</h5>
      <p className="card-text">KES 50.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  
</div>

<br/><br/><br/><br/>
<div className="card-group mt-5">
  <div className="card">
    <img className="card-img-top" src="images/ima_1.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-text">Potatoes</h5>
      <p className="card-text">KES 80.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima2.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Kales</h5>
      <p className="card-text">KES 25.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima7.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Pineapples</h5>
      <p className="card-text">KES 50.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  
</div>
<br/><br/><br/><br/>
<div className="card-group mt-5">
  <div className="card">
    <img className="card-img-top" src="images/ima5.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-text">Green Melon.</h5>
      <p className="card-text">KES 20.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima8.jpg"/>
    <div className="card-body">
      <h5 className="card-title">Avacado</h5>
      <p className="card-text">KES 30.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima9.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Cabbage</h5>
      <p className="card-text">KES 150.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  
</div>
<br/><br/><br/><br/>
<div className="card-group mt-5">
  <div className="card">
    <img className="card-img-top" src="images/ima11.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-text">Corriander</h5>
      <p className="card-text">KES 20.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima10.jpg"/>
    <div className="card-body">
      <h5 className="card-title">Brocolli</h5>
      <p className="card-text">KES 60.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="images/ima6.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Apple</h5>
      <p className="card-text">KES 50.00</p>
      <button className="card-text"><small className="text-muted">Add to Cart</small></button>
    </div>
  </div>
  
</div>


      </div>
     );
     
  }
}
 

export default ProductItems;