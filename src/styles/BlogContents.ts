import { css } from 'styled-components';

export const BlogContents = css`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  font-size: 1rem;
  font-family: medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial,
    sans-serif;
  h2,
  h3,
  h4,
  h5 {
    font-size: 1.6rem;
    margin: 2rem 0 1.5rem;
    padding: 0.2rem 0 0.2rem 1rem;
    position: relative;

    &:before {
      position: absolute;
      top: 0px;
      left: 0px;
      content: '';
      display: inline-block;
      width: 4px;
      height: 100%;
      border-radius: 6px;
      background: rgb(230, 129, 35);
    }
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  p {
    margin: 0;
    margin-bottom: 0.8rem;

    a {
      color: rgb(230, 129, 35);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin: 2rem 0;
  }

  // from here ul style
  ul {
    padding-left: 1.2rem;
    padding-right: 0.5rem;
    margin: 1rem 0;

    ul {
      margin: 0;
    }

    li {
      padding: 0.2rem 0.5rem 0.2rem 0;

      ol {
        padding-left: 0.2rem;
      }
    }

    p {
      margin-bottom: 0.5rem;
    }
  }

  // from here ol style
  ol {
    counter-reset: number 0;
    margin: 1rem 0;

    li {
      position: relative;
      line-height: 1.6;
      padding: 0 0.5rem 0 2.2rem;
      margin-bottom: 0.7rem;
      list-style: inside none;

      &:before {
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 2px;
        width: 1.5rem;
        height: 1.5rem;
        color: rgba(255, 255, 255, 1);
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        line-height: 25px;
        content: counter(number);
        counter-increment: number 1;
        border-radius: 50%;
        background: rgb(230, 129, 35);
      }

      ul {
        margin: 1rem 0;
        li {
          padding: 0 0.3rem;
          list-style: circle;

          &:before {
            content: '';
            background: transparent;
          }
        }
      }
    }
  }

  table {
    margin: 2rem 0;
    border-collapse: separate;
    border-spacing: 2px;
  }
  thead {
    color: #fefefe;
    font-size: 1.2rem;
    tr {
      th {
        padding: 0.5rem;
        background-color: rgb(230, 129, 35);

        &:first-child {
          border-radius: 8px 0 0 0;
        }

        &:last-child {
          border-radius: 0 8px 0 0;
        }
      }
    }
  }
  tbody {
    background-color: #f5f5f5;

    td {
      padding: 0.5rem;
    }
  }
  blockquote {
    padding: 0.4rem 0 0.4rem 1rem;
    margin: 1rem 0;
    border-radius: 0 8px 8px 0;
    position: relative;

    &:before {
      position: absolute;
      top: 0px;
      left: 0px;
      content: '';
      display: inline-block;
      width: 4px;
      height: 100%;
      border-radius: 6px;
      background: rgb(0, 0, 0, 0.5);
    }

    p {
      margin-bottom: 0;
    }
  }
`;
