import React from "react";
import "./Header.css";
import bookLogo from '../../assets/education.svg'
import {useHistory} from 'react-router-dom'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
export default function Header() {
  const history = useHistory()
 const openCartItem = ()=>{
  history.push('/home/book/mycart')
 }
  return (
    <div className="mainHeader">
      <div className="logoTitle">
        <div className="logo">
          <img src={bookLogo} alt="svg" />
        </div>
        <div className="logoTxt">Bookstore</div>
      </div>
      <div className="searchBox">
        <input type="text" className="searchInpuut" placeholder="Search ..." />
      </div>
      <div className="profilrMycart">
        <div className="">
          <PermIdentityOutlinedIcon />
          Profile
        </div>
        <div onClick={openCartItem}>
          <ShoppingCartOutlinedIcon />
          Cart
        </div>
      </div>
    </div>
  );
}
