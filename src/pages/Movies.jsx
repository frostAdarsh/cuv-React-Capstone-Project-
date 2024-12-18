import { useState } from "react";
import MovieGrid from "../components/MovieGrid";
import MovieChip from "../components/movieChip";
import styles from "../components/movie.module.css";
import action from "../images/Action.svg";
import drama from "../images/Drama.svg";
import fantasy from "../images/Fantasy.svg";
import fiction from "../images/Fiction.svg";
import horror from "../images/Horror.svg";
import music from "../images/Music.svg";
import romance from "../images/Romance.svg";
import Thriller from "../images/Thriller.svg";
import western from "../images/Western.svg";
import { useNavigate } from "react-router-dom";

const MOVIES = [
  {
    value: "action",
    label: "Action",
    image: action,
    bs: "#FF5209",
  },
  {
    value: "drama",
    label: "Drama",
    image: drama,
    bs: "#D7A4FF",
  },
  {
    value: "romance",
    label: "Romance",
    image: romance,
    bs: "#11B800",
  },
  {
    value: "thriller",
    label: "Thriller",
    image: Thriller,
    bs: "#84C2FF",
  },
  {
    value: "western",
    label: "Western",
    image: western,
    bs: "#902500",
  },
  {
    value: "horror",
    label: "Horror",
    image: horror,
    bs: "#7358FF",
  },
  {
    value: "fanstasy",
    label: "Fanstasy",
    image: fantasy,
    bs: "#FF4ADE",
  },
  {
    value: "music",
    label: "Music",
    image: music,
    bs: "#E61E32",
  },
  {
    value: "fiction",
    label: "Fiction",
    image: fiction,
    bs: "#6CD061",
  },
];
const Movies = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleNext = () => {
    if ( selected.length < 3) {
      alert("Minimun 3 category required");
    } else {
      localStorage.setItem("selected", JSON.stringify(selected));
      navigate("/recommendation")
    }
  };
  console.log(selected);
  return (
    <div className={styles.spacebox}>
      <div className={styles.spacebox_left}>
        <h1 className={styles.movie_supertext}>Super app</h1>
        <h1 className={styles.details_text}>
          Choose your <br /> entertainment <br /> category
        </h1>
        <div className={styles.movie_chips}>
          {selected.map((movie) => (
            <MovieChip
              key={movie}
              selected={selected}
              setSelected={setSelected}
              movie={movie}
            />
          ))}
        </div>
        {selected.length > 0 && selected.length < 3 ? (
          <p className={styles.warningcolor}> Minimum 3 categories required</p>
        ) : null}
      </div>
      <div className={styles.spacebox_right}>
        <div className={styles.movie_grid}>
          {MOVIES.map((movie) => (
            <MovieGrid
              key={movie.value}
              selected={selected}
              setSelected={setSelected}
              movie={movie}
            />
          ))}
        </div>
        <button className={styles.nextbtn} onClick={handleNext}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Movies;
