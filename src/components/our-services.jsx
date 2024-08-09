import assets from "../assets";

function OurServices() {
  return (
    <section id="our-services">
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <img
              src={assets.imgServices}
              className="img-fluid"
              alt="TMMIN Car Rental Services"
            />
          </div>
          <div className="col-12 col-md-6 px-5">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul>
              <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li>Sewa Mobil Jangka Panjang Bulanan</li>
              <li>Gratis Antar - Jemput Mobil di Bandara</li>
              <li>Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
