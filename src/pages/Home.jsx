import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import ALLproducts from './ALLproducts.jsx'

import "../styles/hero-section.css";
import Vedio from "../components/Vedio.jsx/Vedio.jsx";




const Home = () => {
  return (
    <Helmet title="store">
      <Vedio />
     
      <section>

        
        <Container className="new-collections" >

          <div className="new-collections">
            <h1>NEW COLLECTIONS </h1>
            <hr />
            <ALLproducts ></ALLproducts>
          </div>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;
