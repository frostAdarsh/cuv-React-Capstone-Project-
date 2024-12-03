
import styles from "./movie.module.css"
export default function MovieGrid({ movie, selected, setSelected }) {
    const handleSelection = () => {
        if (selected.includes(movie.label)) {
            setSelected(selected.filter(item => item !== movie.label))
        } else {
            setSelected([...selected, movie.label])
        }
    }
    const generateBorder = (label) => {
        if (selected.includes(label)) {
            return "2px solid green"
        }
        return "2px solid black"
    }
    return (
        <div style={{
            border: generateBorder(movie.label), background:(movie.bs), color:"white",
        }} onClick={handleSelection} className={styles.movie_box}>
            <h2 className={styles.imgtext}>{movie.label}</h2>
            <img  className={styles.imgsize}src={movie.image} alt={movie.label} />
        </div>
    )
}


