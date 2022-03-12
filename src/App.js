import React from "react";
import {Link,Outlet} from 'react-router-dom'
import "./styles/app.css";

export default function App() {
  return (
    <div>
      <h1>Hello Shop!</h1>
      <Link to='/home'>Home</Link>
      <Link to='/product'>Product</Link>
      <Outlet/>
    </div>
  );
}
