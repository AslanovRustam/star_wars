import { NavLink } from "react-router-dom";
import styles from "./sliderv3.module.css";
import Tilt from "react-parallax-tilt";

export default function SliderListV3({ activeIndex, sliderList }) {
  return (
    <section className={styles.sliderList}>
      {sliderList.map((item, index) => (
        <div className={index === activeIndex ? styles.active : styles.inActive} key={index}>
          <NavLink to={`/${item.title}`} className={index === activeIndex ? styles.navItem : styles.inActiveNavItem}>
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
