import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// ref: https://blog.logrocket.com/set-up-a-typescript-gatsby-app/

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: [];
  title?: string;
};

const SEO = ({ description, lang = 'ja', meta, title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = `${site.siteMetadata.title} | Yutazonのブログ`;

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        defaultTitle={defaultTitle}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
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
            property: `og:image`,
            content: site.siteMetadata.image,
          },
          {
            property: `og:type`,
            content: `blog`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
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
      <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Helmet>
    </Fragment>
  );
};

export default SEO;
