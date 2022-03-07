import { useState, useEffect } from "react";
import SliderList from "./sliderList";
import Dots from "./dots";
import Arrow from "./arrow";
import styles from "./slider.module.css";

export default function Slider({ list }) {
  const length = list.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className={styles.container}>
      <SliderList activeIndex={activeIndex} sliderList={list} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderList={list}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </section>
  );
}
