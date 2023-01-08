import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    allgames,
    image,
    gameTitle,
    title,
  } from "./game.module.css"

  const Game = ({ game, slug }) => {
    const profile = getImage(game.gameMeta.picture.localFile)
    return (
      <Link className={allgames} to={slug}>
        <GatsbyImage
         className={image}
          image={profile}
          alt={game.gameMeta.picture.altText}
        />
        <article className={gameTitle}>
          <p className={title}>
            {game.gameMeta.title}
          </p>
        </article>
      </Link>
    )
  }
  
  export default Game