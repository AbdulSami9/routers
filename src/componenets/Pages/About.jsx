import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.(Hitch costs extra 😉)Our team
          is full of vanlife enthusiasts who know firsthand the magic of touring
          the world on 4 wheels.
        </p>
      </div>
      <div>
        <h1>Your destination is waiting</h1>
        <h1>Your van is ready</h1>
        <Link to="/vans">Explore our vans</Link>
      </div>
    </>
  );
}

export default About;
