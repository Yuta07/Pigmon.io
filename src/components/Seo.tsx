import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

const SEO = ({ description, lang = 'ja', meta, title }: SEOProps) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        const defaultTitle = "Pigmon.io | Yutazon's room";
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            defaultTitle={defaultTitle}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta || [])}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
      }
    }
  }
`;

export default SEO;
