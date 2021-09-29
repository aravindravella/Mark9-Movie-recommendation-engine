import React, { useState } from "react";
import "./styles.css";

const MovieDb = {
  SciFi: [
    {
      name: "DUNE",
      review:
        "  Performances are incredible especially Oscar Issac and young Timothée Chalamet. The movie is itself captivating and the visually breathtaking cinematography is God like.",
      rating: "8.4/10"
    },
    {
      name: "Shang-Chi and the Legend of the Ten Rings",
      review:
        "	The acting is good, special effects are solids and the story is not bad.",
      rating: "7.9/10"
    },
    {
      name: "Free Guy",
      review:
        " It was enjoyable throughout, paced well, and cast exceptionally. The major strength of this movie is in how damn likeable this cast is.",
      rating: "7.4/10"
    },
    {
      name: "Black widow",
      review: "Seeing more on the history of this character is long overdue. ",
      rating: "6.8/10"
    }
  ],

  Crime: [
    {
      name: "Kate (I)",
      review: "The basic plot outline is the same as in DOA (1949, 1988).",
      rating: "6.3/10"
    },
    {
      name: "F9: The Fast Saga",
      review:
        "They ship out any garbage and don't bother anymore. That is how much esteem they hold us in.",
      rating: "5.2/10"
    },
    {
      name: "The Wolf of Wall Street",
      review:
        "Brilliantly acted, superbly written and as one would expect from a picture by Martin Scorsese, it is a masterclass of directorial craft.",
      rating: "8.2/10"
    },
    {
      name: "The Dark Knight",
      review:
        "Best movie ever. Heath ledger's work is phenomenal no words......",
      rating: "9/10"
    }
  ],

  Superhero: [
    {
      name: "Venom",
      review:
        "The plot is fairly classic for this type of movie; nothing good or bad about it .",
      rating: "6.7/10"
    },
    {
      name: "Avengers: Endgame",
      review: "Underpowered Thor.",
      rating: "8.2/10"
    },
    {
      name: "Zack Snyder's Justice League",
      review: "JUSTICE FOR THE JUSTICE LEAGUE HAS BEEN SERVED",
      rating: "8.1/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SciFi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1
        style={{
          borderBottom: "5px solid #F97068",
          fontSize: "4rem",
          textAlign: "center"
        }}
      >
        Movie Recommendation Engine
      </h1>

      <p style={{ fontSize: "1rem" }}>watched movies</p>

      {Object.keys(MovieDb).map((genre) => (
        <button
          onClick={() => genreClickHandler(genre)}
          style={{
            cursor: "pointer",
            background: "inherit",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid #F97068",
            color: "#F97068",
            margin: "1rem 0.3rem"
          }}
        >
          {genre}
        </button>
      ))}

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MovieDb[selectedGenre].map((MovieDB) => (
            <li
              key={MovieDB.name}
              style={{
                listStyle: "none",
                padding: "1.5rem",
                border: "1.5px solid #57C4E5",
                backgroundColor: "#2D364D",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "20px" }}> {MovieDB.name} </div>
              <div style={{ fontSize: "smaller", margin: "1rem 0rem" }}>
                {MovieDB.review}
              </div>
              <div style={{ fontSize: "smaller", color: "#D1D646" }}>
                {MovieDB.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
