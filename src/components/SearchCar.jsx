import { React, useState } from "react";
import { Link } from "react-router-dom";
import { listCars } from "../assets/js/getCars";
import assets from "../assets";

export default function SearchCar() {
  const [cars, setCars] = useState(null);
  const [inputData, setInputData] = useState({
    typeDriver: "",
    tanggal: "",
    waktu: "",
    capacity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (
      inputData.typeDriver === "" ||
      inputData.tanggal === "" ||
      inputData.waktu === ""
    ) {
      return alert("Mohon dipilih Tipe Driver, Tanggal dan waktu jemput");
    }

    const data = await listCars((el) => {
      return inputData.capacity
        ? el.capacity >= inputData.capacity
        : true &&
            el.typeDriver === inputData.typeDriver &&
            el.availableAt >= new Date(inputData.tanggal) &&
            el.availableAt.getHours() >= Number(inputData.waktu);
    });

    setCars(data);
  };

  return (
    <>
      <section id="search">
        <div className="container">
          <div className="position-relative">
            <div className="card position-absolute top-0 start-50 translate-middle w-100">
              <div className="card-body shadow">
                <form className="row g-3 justify-content-center">
                  <div className="col-auto">
                    <label className="form-label">Tipe Driver</label>
                    <select
                      className="form-select"
                      id="tipedriver"
                      name="typeDriver"
                      required
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-auto">
                    <label className="form-label">Waktu / Jam Jemput</label>
                    <select
                      className="form-select"
                      id="waktu"
                      name="waktu"
                      required
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-auto align-self-end">
                    <button
                      id="cari"
                      type="button"
                      className="btn btn-success"
                      onClick={(e) => handleSearch(e)}
                    >
                      Cari Mobil
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="result">
        <div className="container mt-5 pt-5">
          <div className="row row-gap-4" id="searchresult">
            {cars
              ? cars.map((e, index) => (
                  <div className="col-12 col-md-4 mb-4" key={index}>
                    <div className="card pb-2">
                      <img
                        src={e.image}
                        className="card-img-top img-fluid"
                        alt={e.name}
                      />
                      <div className="card-body">
                        <h6>{e.name}</h6>
                        <label>{e.price}</label>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora, accusamus!
                        </p>
                        <ul>
                          <li>
                            <img src={assets.iconUsers} className="mx-2"/>
                            <span>{e.capacity} Orang</span>
                          </li>
                          <li>
                            <img src={assets.iconSettings} className="mx-2" />
                            <span>Manual</span>
                          </li>
                          <li>
                            <img src={assets.iconCalendar} className="mx-2" />
                            <span>Tahun 2020</span>
                          </li>
                        </ul>
                        <Link
                          to={"/cari/detail/" + e.id}
                          className="btn btn-success d-block"
                        >
                          Pilih Mobil
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : cars !== null && (
                  <p className="text-center">
                    Hasil Tidak Ditemukan, Silahkan Melakukan Pencarian Ulang!
                  </p>
                )}
          </div>
        </div>
      </section>
    </>
  );
}
