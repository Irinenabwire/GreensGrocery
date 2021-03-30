import React from 'react';
import '../../sign.css';
import { Link } from 'react-router-dom';
import '../Button.css';


import loginImg from "../../login.svg";

class FormValidator extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Link to='/SignIn' className='btn-mobile'>
          <button  type="button" className="btn">
          SignUp
          </button>
    </Link>
          
          or
          <Link to='/SignIn' className='btn-mobile'>
          <button  type="button" className="btn">
        Sign In
          </button>
    </Link>
          {/* or
          */}

        </div>
      </div>
    );
  }
}



export default FormValidator;

