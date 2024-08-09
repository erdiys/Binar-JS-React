import { React, useState } from "react";

import NavBarTmmin from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import SearchCar from "../components/SearchCar";
import SearchResult from "../components/SearchResult";

export default function sewa() {
  return (
    <>
      <NavBarTmmin />

      <Hero />
      <SearchCar />
      <SearchResult />

      <Footer />
    </>
  );
}
