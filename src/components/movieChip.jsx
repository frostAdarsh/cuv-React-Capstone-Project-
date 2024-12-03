import styles from "./movie.module.css"
export default function MovieChip({ movie, selected, setSelected }) {
    const handleSelection = () => {
        if (selected.includes(movie)) {
            setSelected(selected.filter(item => item !== movie))
        } else {
            setSelected([...selected, movie])
        }
    }
    return (
        <>
            <div onClick={handleSelection} className={styles.movie_chip} >
                <p className={styles.movie_text}>{movie} x
                </p>

            </div>
        </>
    )
}