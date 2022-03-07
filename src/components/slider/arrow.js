import styles from './slider.module.css'
export default function Arrow({prevSlide, nextSlide}){
    return(
        <div className={styles.arrows}>
            <span className={styles.prev} onClick={prevSlide}>prev</span>
            <span className={styles.next} onClick={nextSlide}>next</span>
        </div>
    )
}