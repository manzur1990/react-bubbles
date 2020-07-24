import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


//Components
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const { push } = useHistory()
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const logout = e => {
    localStorage.removeItem('token');
    push('/');
  };

  return (
    <div>
      <h1>Welcome to React Bubbles</h1>
      <button onClick={logout}>Logout</button>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
