// import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import styles from "./sliderv4.module.css";
// import Tilt from "react-parallax-tilt";
import Arrow from "../slider/arrow";
import TiltItem from "../tilt/tilt";


export default function SliderListV4({ activeIndex, sliderList }) {
  const [offset, setOffset]=useState(0);
  const [window, setWindow]=useState(0);
  const [itemOffset, setItemOffset]=useState(1062);

  const windowElRef=useRef();
  const itemElRef=useRef();

  useEffect(() => {
    const windowWidth = windowElRef.current.offsetWidth;
    // const itemWidth = itemElRef.current.offsetWidth;
    // setWindow(windowElRef.current.scrollWidth-windowElRef.current.offsetWidth)
    setWindow(windowWidth)
    // setItemOffset(itemWidth)
  }, []);
console.log('window',window);
console.log('item',itemOffset);

  const PrevSlideClick=()=>{
    setOffset(Math.min(offset+itemOffset,0)); console.log('offset +',offset)
  }
  const NextSlideClick=()=>{
    setOffset(Math.max(offset-itemOffset,-window*3)); console.log('offset -',offset)
  }
  return (
    <section className={styles.sliderList}>
     <div  className={styles.window}  ref={windowElRef}>
     {sliderList.map((item, index) => (
       <TiltItem key={index} activeIndex={activeIndex} index={index} item={item} offset={offset}/>
       ))}
     </div>
     <Arrow    
          prevSlide={PrevSlideClick}
        nextSlide={NextSlideClick}
      />
    </section>
  );
}
// <div className={index === activeIndex ? styles.active : styles.inActive} key={index} ref={itemElRef}>
//   <NavLink to={`/${item.title}`} className={styles.navItem}>
//     {item.title}
//     <Tilt
//       className={styles.tilt}
//       tiltMaxAngleX={20}
//       tiltMaxAngleY={20}
//       perspective={1000}
//       transitionSpeed={5000}
//       gyroscope={true}
//       // trackOnWindow= {true}
//     >
//       <img
//         className={styles.img}
//         src={item.img}
//         alt="some picture"
//       ></img>
//     </Tilt>
//   </NavLink>
// </div>
