import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Container>
    <h1>Home Page</h1>
    <Link to="/dogpage">
      <p>Dog Page</p>
    </Link>
  </Container>
  )
}
