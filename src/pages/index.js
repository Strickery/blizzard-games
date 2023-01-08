import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  homePage,
  homeImage,
  homeTitle,
  homeText,
  section,
  featureGame,
  games,
  form,
  contactForm,
} from "../page.module.css"
import Game from "../components/game.js"

const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {
  const image = getImage(homeFields.picture.localFile)

  return (
    <Layout>
        <div>
          <GatsbyImage
            image={image}
            className={homeImage}
            alt={homeFields.picture.altText}
          />
        </div>
        <div className={homeText}>
          <article className={homePage}>
            <h1 className={homeTitle}>{homeFields.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: homeFields.description,
              }}
            />
          </article>
        </div>
      <section className={section}>
        <h2 className={featureGame}>Featured Games</h2>
        <div className={games}>
          {homeFields.games.map(game => {
          return <Game slug={`games/${game.slug}`} key={game.id} game={game} />
        })}
        </div>
        <h2 className={featureGame}>Contact me!</h2>
      </section>
      <section className={form}>
        <form className={contactForm} name="contact" method="POST" data-netlify="true">
            <label>First name:</label>
            <input type="text" name="firstname" required={true} />
            <label>Last name:</label>
            <input type="text" name="lastname" required={true} />
            <label>Email:</label>
            <input type="email" name="email" required={true} />
            <label>Subject:</label>
            <input type="text" name="subject" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      homeFields {
        games {
          ... on WpGame {
            id
            slug
            gameMeta {
              title
              picture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage