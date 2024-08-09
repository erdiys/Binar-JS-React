import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from 'swiper/modules';
import assets from "../assets";

const Testimonial = () => {
  const swiper = useSwiper();

  return (
    <section id="testimonial">
      <div className="py-5 my-5">
        <div className="text-center">
          <h2 className="mb-3">Testimonial</h2>
          <p className="mb-4">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints= {{
          768: {
            slidesPerView: 2.1,
          },
        }}
        >
        {/* <div className="swiper mySwiper"> */}
          <div className="swiper-wrapper">
            <SwiperSlide>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img
                        src={assets.imgPhoto1}
                        alt="TMMIN Car Rental - Customer"
                      />
                    </div>
                    <div className="col-12 col-md-9">
                      <img
                        src={assets.imgRate}
                        alt="TMMIN Car Rental - Rate"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img
                        src={assets.imgPhoto2}
                        alt="TMMIN Car Rental - Customer"
                      />
                    </div>
                    <div className="col-12 col-md-9">
                      <img
                        src={assets.imgRate}
                        alt="TMMIN Car Rental - Rate"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img
                        src={assets.imgPhoto2}
                        alt="TMMIN Car Rental - Customer"
                      />
                    </div>
                    <div className="col-12 col-md-9">
                      <img
                        src={assets.imgRate}
                        alt="TMMIN Car Rental - Rate"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img
                        src={assets.imgPhoto1}
                        alt="TMMIN Car Rental - Customer"
                      />
                    </div>
                    <div className="col-12 col-md-9">
                      <img
                        src={assets.imgRate}
                        alt="TMMIN Car Rental - Rate"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quisquam eaque autem obcaecati, reprehenderit modi
                        accusamus praesentium ea quam quo a velit temporibus
                        quia delectus ipsam deserunt tenetur suscipit. Sint?
                      </p>
                      <label>John Dee 32, Bromo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          </div>
          <div className="swiper-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        {/* </div> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
