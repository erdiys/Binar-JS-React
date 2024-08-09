import assets from "../assets";

function footer() {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-3">
            <div id="address">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
          </div>
          <div className="col-3">
            <div className="fw-medium" id="page">
              <p>Our Services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="col-3">
            <div id="contact">
              <div>
                <p>Connect with us</p>
              </div>
              <div className="row pe-5">
                <div className="col">
                  <img src={assets.facebook} />
                </div>
                <div className="col">
                  <img src={assets.instagram} />
                </div>
                <div className="col">
                  <img src={assets.twitter} />
                </div>
                <div className="col">
                  <img src={assets.mail} />
                </div>
                <div className="col">
                  <img src={assets.twitch} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div id="copyright">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
