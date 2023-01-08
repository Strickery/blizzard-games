import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  gameTitle,
  sgamePic,
  genre,
  gameDescription,
  gameProps,
  centerPic,
  singleGame,
} from "../../page.module.css"

const GamePage = ({
    data: {
      wpGame: {
        gameMeta: game,
        genres: { nodes: genres },
      },
    },
  }) => {
    const image = getImage(game.picture.localFile)
  
    return (
      <Layout pageTitle="Game Template">
        <section className={singleGame}>
          <div className={centerPic}>
            <GatsbyImage
              className={sgamePic}
              image={image}
              alt={game.picture.altText}
            />
          </div>
          <article>
            {game.title && (
              <h3 className={gameTitle}>{game.title}</h3>
            )}
            <div className={genre}>
              {genres.map((genre, i) => (
                <span>
                  {genre.name} {i + 1 < genres.length && "- "}
                </span>
              ))}
            </div>
            <div
              className={gameDescription}
              dangerouslySetInnerHTML={{ __html: game.description }}
            />
            <p>
              <span className={gameProps}>Publisher:</span> {game.publisher}
            </p>
            <p>
              <span className={gameProps}>Score:</span> {game.score} (Metacritic)
            </p>
            <p>
              <span className={gameProps}>ReleaseDate:</span> {game.releaseDate}
            </p>
            <p>
              <span className={gameProps}>Price:</span> &euro; {game.price > 0 ? game.price : 0}
            </p>
            <p>
              <span className={gameProps}>Playable:</span> {game.playable === true ? <p style={{display: "inline"}}>Yes</p> : <p style={{display: "inline"}}>No</p>}
            </p>
            <p>
              <span className={gameProps}>Platform:</span> {game.platform}
            </p>
            <p>
              <span className={gameProps}>Subscription:</span> {game.subscription}
            </p>
          </article>
        </section>
      </Layout>
    )
  }

export const query = graphql`
  query ($slug: String) {
    wpGame(slug: {eq: $slug}) {
      gameMeta {
        title
        description
        publisher
        score
        releaseDate
        price
        playable
        platform
        subscription
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      genres {
        nodes {
          name
        }
      }
    }
  }
`

export default GamePage