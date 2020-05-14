import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// ref: https://blog.logrocket.com/set-up-a-typescript-gatsby-app/

type SEOProps = {
  title?: string;
  description?: string;
  lang?: string;
  image?: string;
  meta?: [];
};

export const SEO = ({ title, description, image, meta }: SEOProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage, twitterUsername } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <Helmet
        title={title}
        titleTemplate={titleTemplate}
        meta={[
          {
            name: `description`,
            content: seo.description,
          },
          {
            name: `image`,
            content: seo.image,
          },
          {
            name: `og:url`,
            content: seo.url,
          },
          {
            property: `og:type`,
            content: `blog`,
          },
          {
            property: `og:title`,
            content: seo.title,
          },
          {
            property: `og:description`,
            content: seo.description,
          },
          {
            property: `og:image`,
            content: seo.image,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: twitterUsername,
          },
          {
            name: `twitter:title`,
            content: seo.title,
          },
          {
            name: `twitter:description`,
            content: seo.description,
          },
          {
            name: `twitter:image`,
            content: seo.image,
          },
        ].concat(meta || [])}
      />
      <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Helmet>
    </>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
