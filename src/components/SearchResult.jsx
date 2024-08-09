import React from "react";

export default function SearchResult() {
  return (
    <>
      <section id="result">
        <div className="container mt-4">
          <div className="row row-gap-4" id="searchresult"></div>
        </div>
      </section>
      <script src="../assets/js/getCars.js"></script>
      <script src="../assets/js/script.js"></script>
    </>
  );
}
