import React from "react";
import Logo from "../../img/logo-qalay.png";
import "../../Sass/Cpanel.scss";
import { NavLink } from "react-router-dom";

const TableProduct = () => {
  return (
    <div className="TableProduct">
      <div className="header">
        <img src={Logo} alt="Logo" />
        <div className="listPage">
          <NavLink to="/TableProduct">Products</NavLink>
          <NavLink to="/Cpanel">Add Products</NavLink>
        </div>
      </div>
      <div className="MainTable">
          <table>
            <tr>
                <th>Row</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td><button>Delete</button></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td><button>Delete</button></td>
            </tr>
            
        </table>
      </div>
    </div>
  );
};

export default TableProduct;
