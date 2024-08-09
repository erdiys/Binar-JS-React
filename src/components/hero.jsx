import { Link } from 'react-router-dom';
import assets from "../assets";

const hero = ({button = false}) => {
  return (
    <section id="hero" className="bg-red">
      <div className="container">
        <div className="row">
          <div className="col-6 px-5 d-flex align-items-center text-light">
            <div>
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {button? <Link to="/cari" className="btn btn-success">Mulai Sewa Mobil</Link> : ''}
            </div>
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src={assets.zenix}
              alt="toyota zenix"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
