import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <div className={imageWrapper}>
        <GatsbyImage
          image={getImage(data.file)}
          alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around it"
        />
      </div>
      <h2>About This Site</h2>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
