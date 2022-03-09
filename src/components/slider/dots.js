import styles from "./slider.module.css";
export default function Dots({ activeIndex, onClick, sliderList }) {
  return (
    <div className={styles.dots}>
      {sliderList.map((sliderItem, index) => (
        <div
          key={index}
          className={`${activeIndex === index ? styles.activeDot : styles.dot}`}
          onClick={() => onClick(index)}
        ></div>
      ))}
    </div>
  );
}
