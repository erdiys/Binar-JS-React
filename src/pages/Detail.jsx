import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/navbar";
import assets from "../assets";

export default function Detail() {
  const params = useParams();
  const cachedCars = localStorage.getItem("CARS");
  const parsedCars = JSON.parse(cachedCars);
  const [data] = useState(parsedCars.find((e) => e.id == params.id));
  return (
    <>
      <Navigation />
      <section className="bg-red">
        <div className="container">
          <div className="py-5"></div>
        </div>
      </section>

      <section id="search">
        <div className="container">
          <div className="position-relative">
            <div className="card position-absolute top-0 start-50 translate-middle w-100">
              <div className="card-body shadow">
                <div>
                  <h4>Pencarianmu</h4>
                </div>
                <form className="row g-3 justify-content-center">
                  <div className="col-auto">
                    <label className="form-label">Tipe Driver</label>
                    <select
                      className="form-select"
                      id="tipedriver"
                      name="typeDriver"
                      required
                      disabled={true}
                    >
                      <option>Pilih Tipe Driver</option>
                      <option value="Dengan Supir">Dengan Sopir</option>
                      <option value="Lepas Kunci">
                        Tanpa Sopir (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                  <div className="col-auto">
                    <label className="form-label">Tanggal</label>
                    <input
                      type="date"
                      id="tanggal"
                      name="tanggal"
                      className="form-control"
                      placeholder="Pilih Tanggal"
                      required
                      disabled={true}
                    />
                  </div>
                  <div className="col-auto">
                    <label className="form-label">Waktu / Jam Jemput</label>
                    <select
                      className="form-select"
                      id="waktu"
                      name="waktu"
                      required
                      disabled={true}
                    >
                      <option>Pilih Jam Jemput</option>
                      <option value="8">08.00</option>
                      <option value="9">09.00</option>
                      <option value="10">10.00</option>
                      <option value="11">11.00</option>
                      <option value="12">12.00</option>
                    </select>
                  </div>
                  <div className="col-auto">
                    <label className="form-label">Jumlah Penumpang</label>
                    <input
                      id="penumpang"
                      name="capacity"
                      type="number"
                      className="form-control"
                      placeholder="Jumlah Penumpang"
                      disabled={true}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cardetail">
        <div className="container mt-5 pt-5">
          <div className="row flex-md-row-reverse">
            <div className="col-5 col-md-3">
              <div className="border border-3 rounded p-4">
                <img src={data.image} alt={data.name} className="img-fluid" />
                <h4>{data.name}</h4>
                <div className="my-4">
                <img src={assets.iconUsers} className="mx-2" />
                <span>
                  {data.capacity - 2} - {data.capacity} orang
                </span>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>Total</h5>
                  <h5>Rp {data.price.toLocaleString()}.-</h5>
                </div>
              </div>
            </div>
            <div className="col-7 col-md-9">
              <div className="me-2 border border-3 rounded p-4">
                <h4 className="mb-5">Tentang Paket</h4>
                <h5>Include</h5>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam{" "}
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam </li>
                  <li>Sudah termasuk Tiket Wisata </li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h5>Exclude</h5>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam{" "}
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h5>Refund, Reschedule, Overtime</h5>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam{" "}
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam{" "}
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam{" "}
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
}
