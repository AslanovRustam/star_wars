import { NavLink } from "react-router-dom";
import styles from "./sliderv2.module.css";

export default function SliderListV2({ activeIndex, sliderList }) {
  return (
    <section className={styles.sliderList}>
      {sliderList.map((item, index) => (
        <div className={index === activeIndex ? styles.active: styles.inActive} key={index}>
          <NavLink to={`/${item.title}`} className={styles.navItem}>
            {item.title}
            <img className={styles.img} src={item.img}></img>
          </NavLink>
        </div>
      ))}
    </section>
  );
}
