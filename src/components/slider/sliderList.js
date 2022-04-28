import { NavLink } from "react-router-dom";
import styles from "./slider.module.css";
import Tilt from "react-parallax-tilt";

export default function SliderList({ activeIndex, sliderList }) {
  return (
    <section className={styles.sliderList}>
      {sliderList.map((item, index) => (
        <div className={index === activeIndex ? styles.active : styles.inActive} key={index}>
          <NavLink to={`/${item.title}`} className={styles.navItem}>
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
      ))}
    </section>
  );
}
