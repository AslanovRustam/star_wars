import { NavLink } from "react-router-dom";
import styles from "./sliderv4.module.css";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';

export default function SliderListV4({ activeIndex, sliderList }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className={styles.sliderList}>

    <Swiper
    slidesPerView={2.2}
    loop={true}
    spaceBetween={20}
    pagination={pagination}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
 {sliderList.map((item, index) => (
  <SwiperSlide>
  <div className={index === activeIndex ? styles.active : styles.inActive} key={index}>
              <NavLink
                to={`/${item.title}`}
                className={styles.navItem}>
                {item.title}
                <Tilt
                  className={styles.tilt}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  transitionSpeed={5000}
                  gyroscope={true}
                  // trackOnWindow= {true}
                >
                  <img
                    className={styles.img}
                    src={item.img}
                    alt="some picture"
                  ></img>
                </Tilt>
              </NavLink>
            </div>
  </SwiperSlide>
          ))}
  </Swiper>
  </section>
    );
  }

