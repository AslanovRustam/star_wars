import { useState, useEffect } from "react";
import SliderList from "./sliderList";
import SliderListV2 from "../sliderv2/sliderlistv2";
import SliderListV3 from "../sliderv3/sliderv3";
import SliderListV4 from "../sliderv4/sliderv4";
import SliderListV5 from "../sliderv5/sliderv5";
import Dots from "./dots";
import Arrow from "./arrow";
import styles from "./slider.module.css";

export default function Slider({ list }) {
  // const length = list.length - 1;
  // const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  return (
    <section className={styles.container}>
      {/* <SliderList activeIndex={activeIndex} sliderList={list} /> */}
      {/* <SliderListV2 activeIndex={activeIndex} sliderList={list} /> */}
      {/* <SliderListV3 activeIndex={activeIndex} sliderList={list} /> */}
      {/* <SliderListV4 activeIndex={activeIndex} sliderList={list}  /> */}
      <SliderListV5 sliderList={list}  />

      {/* <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      /> */}
      {/* <Dots
        activeIndex={activeIndex}
        sliderList={list}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      /> */}
    </section>
  );
}

// "homepage": "https://AslanovRustam.github.io/star_wars",