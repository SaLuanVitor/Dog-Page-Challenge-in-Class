import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Dog() {
    const [dog, setDog] = useState();
    const [show, setShow] = useState(false);
  
    function getDog() {
      axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
        setDog(response.data.message);
        setShow(true);
      });
    }
  return (
      <Container>
        <h1>Dog Page</h1>
        <Link to="/">
          <p>Home</p>
        </Link>
        <button
          onClick={() => {
            getDog();
          }}
        >
          Clique aqui
        </button>
        {show && <Img src={dog} alt="Dog" />}
      </Container>
    );
  }