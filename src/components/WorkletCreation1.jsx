import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import Navbar from "./Navbar.jsx";
import Avatars from "./Avatars.jsx";

function WorkletCreation1() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <div style={{ padding: 12, display: 'flex', gap: 8 }}>
          <Link to="/worklet1" style={{ textDecoration: 'none' }}>
            <img src={reactLogo} alt="Worklet Creation" style={{ height: 34, display: 'block' }} />
          </Link>
          <Link to="/worklet2" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '6px 10px' }}>WorkletCreation2</button>
          </Link>
          <Link to="/switcher" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '6px 10px' }}>Switcher</button>
          </Link>
        </div>
      )}
  <Navbar />
  <Avatars title={"Worklet Creation - Mentor Initiation"} showProblemToolbar={false} showCommentToolbar={false} />
    </>
  );
}

export default WorkletCreation1;
