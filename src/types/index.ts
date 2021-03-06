// link type
export type Link = {
  img: string;
  link: string;
  name: string;
};

// category type
export type Category = {
  path: string;
  title: string;
};

// theme type
export type AppTheme = {
  text: string;
  background: string;
  hover: string;
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

// index page blog post type
export interface IndexPageProps {
  pageContext: {
    category: string;
  };
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: string;
              excerpt: string;
              categories: string[];
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

// blog post page type
export interface BlogPostProps {
  pageContext: {
    slug: string;
  };
  data: {
    markdownRemark: {
      html: string;
      id: string;
      frontmatter: {
        title: string;
        excerpt: string;
        date: string;
        categories: string[];
        featuredImage: childImageSharp;
      };
    };
  };
}
