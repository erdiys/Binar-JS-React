import { Link } from 'react-router-dom'

const CTABanner = () => {
  return (
    <section id="cta-banner">
      <div className="container">
        <div className="align-items-center text-center">
          <div className="card p-5 bg-red text-light">
            <div className="m-auto w-50">
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="d-inline">
                <Link to="/cari" className="btn btn-success" role="button">
                  Mulai Sewa Mobil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
