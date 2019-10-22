// link type
export type Link = {
  img: string;
  link: string;
  name: string;
};

// IndexImage type
// from index.d.ts in gatsby-image
interface FluidObject {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
  base64?: string;
  tracedSVG?: string;
  srcWebp?: string;
  srcSetWebp?: string;
  media?: string;
}

interface fluid {
  fluid: FluidObject;
}

interface childImageSharp {
  childImageSharp: fluid;
}

export interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: string;
              description: string;
              featuredImage: childImageSharp;
            };
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
  };
}
