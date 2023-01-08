import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Game from "../../components/game"
import {
  section,
  games,
  allgameTitle,
} from "../../page.module.css"

const GamesPage = ({
    data: {
      allWpGame: { edges },
    },
  }) => {
    return (
      <Layout pageTitle="Games of Blizzard">
        <section className={section}>
          <h1 className={allgameTitle}>All games</h1>
          <div className={games}>
            {edges.map(({ node: game }) => (
              <Game key={game.id} slug={game.slug} game={game} />
            ))}
          </div>
        </section>
      </Layout>
    )
  }

export const query = graphql`
  query {
    wpPage(slug: {eq: "games"}) {
      gamesField {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    allWpGame {
      edges {
        node {
          gameMeta {
            title
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              altText
            }
          }
          slug
          id
        }
      }
    }
  }
`

export default GamesPage