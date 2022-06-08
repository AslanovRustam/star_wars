// import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styles from "./sliderv5.module.css";
import Arrow from "../slider/arrow";
import TiltItem from "../tilt/tilt";
import Dots from "../slider/dots";

export default function SliderListV5({ sliderList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [window, setWindow] = useState(0);
  const [itemOffset, setItemOffset] = useState(100);

  const windowElRef = useRef();
  //////////////////////////////
  const length = sliderList.length - 1;
  useEffect(() => {
    const windowWidth = windowElRef.current.offsetWidth;
    // setWindow(windowElRef.current.scrollWidth-windowElRef.current.offsetWidth)
    setWindow(windowWidth);
    const startOffset = activeIndex * itemOffset;
  }, [window]);
  useEffect(() => {
    if (window < 768) {
      return;
    }
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
      setOffset(activeIndex === length ? 0 : -(activeIndex + 1) * itemOffset);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, offset, window]);
  //////////////////////////////

  const PrevSlideClick = () => {
    setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1);
    setOffset(Math.min(offset + itemOffset, 0));
  };
  const NextSlideClick = () => {
    setActiveIndex(activeIndex > length - 1 ? activeIndex : activeIndex + 1);
    // setOffset(Math.max(offset - itemOffset, -length * itemOffset));
    setOffset(activeIndex === length ? -activeIndex * itemOffset : -(activeIndex + 1) * itemOffset);
  };
  return (
    <section className={styles.sliderList}>
      <div className={styles.window} ref={windowElRef}>
        {sliderList.map((item, index) => (
          <TiltItem
            key={index}
            activeIndex={activeIndex}
            index={index}
            item={item}
            offset={offset}
          />
        ))}
      </div>
      <Arrow prevSlide={PrevSlideClick} nextSlide={NextSlideClick} />
      <Dots activeIndex={activeIndex} sliderList={sliderList}
        onClick={(activeIndex) => {
          setActiveIndex(activeIndex);
          setOffset(activeIndex === 0 ? activeIndex * itemOffset : activeIndex * -itemOffset);
        }}
      />
    </section>
  );
}
