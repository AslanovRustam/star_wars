import { useState, useEffect} from "react";
import styles from "./cursor.module.css";


export default function Cursor() {
const [position, setPosition] = useState({ x: 0, y: 0 });
const [hidden, setHidden] = useState(false); ////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
const [click, setClick] = useState(false);///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики

useEffect(() => {
  const addEventListeners = () => {
    document.addEventListener('mousemove',mMove);
    document.addEventListener('mouseenter', mEnter);////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
    document.addEventListener('mouseleave', mLeave);////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
    document.addEventListener('mousedown', mDown);///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
    document.addEventListener('mouseup', mUp);///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', mMove);
    document.addEventListener('mouseenter', mEnter);////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
    document.addEventListener('mouseleave', mLeave);////НЕ ОБЯЗАТЕЛЬНО - чтобы спрятать курсор при выходе за границы окна
    document.addEventListener('mousedown', mDown);///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
    document.addEventListener('mouseup', mUp);///НЕ ОБЯЗАТЕЛЬНО - отслеживаем клики
  };

  const mMove = (el) => {
    setPosition({ x: el.clientX, y: el.clientY });
  };
  const mLeave = () => {
    setHidden(true);
  };

  const mEnter = () => {
    setHidden(false);
  };

  const mDown = () => {
    setClick(true);
  };

  const mUp = () => {
    setClick(false);
  };

  addEventListeners();
  return () => removeEventListeners();
}, []);

return (
<div >
  {/* <div className={hidden ? styles.hidden : `${styles.cursor} ${styles.scale}`}style={{left: `${position.x}px`,top: `${position.y}px`}}></div> */}
  <div className={hidden ? styles.hidden : styles.cursor } style={{left: `${position.x}px`,top: `${position.y}px`}}></div>
  <div className={hidden ? styles.hidden : styles.cursor2} style={{left: `${position.x}px`,top: `${position.y}px`}}></div>
  {/* <img className={styles.cursor2} style={{left:left, top:top}} src={Cursor}></img> */}
</div>
);
}
// const [left, setLeft] = useState('0');
// const [top, setTop] = useState('0');

// document.addEventListener('mousemove', function (e) {
//   setLeft(e.clientX) ;
//   setTop(e.clientY) ;

// });

// return (
// <div >
//   <div className={styles.cursor} style={{left:left, top:top}}></div>
//   <div className={styles.cursor2} style={{left:left, top:top}}></div>
//   {/* <img className={styles.cursor2} style={{left:left, top:top}} src={Cursor}></img> */}
// </div>
// );
