import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./tilt.module.css";
import Tilt from "react-parallax-tilt";

export default function TiltItem({ activeIndex, index, item, offset }) {
//   const [itemOffset, setItemOffset] = useState(0);
//   const [renderedItem, setRenderedItem] = useState(0);

//   const itemElRef = useRef();
//   useEffect(() => {
    // setRenderedItem(itemElRef.current.getBoundingClientRect().width);
    // const windowWidth = windowElRef.current.offsetWidth;
    // const itemWidth = itemElRef.current.offsetWidth;
    // setItemOffset(itemWidth);
//   }, []);
  
  return (
    <div
      className={index === activeIndex ? styles.active : styles.inActive}
      key={index}
    //   ref={itemElRef}
      style={{transform: `translateX(${offset}%)`}}
      >
      <NavLink to={`/${item.title}`} className={styles.navItem}>
        <p className={styles.title}>{item.title}</p>
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
  );
}
                    