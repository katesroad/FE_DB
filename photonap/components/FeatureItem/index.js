import * as React from "react";
import styled from "styled-components/macro";

// the feature item for features page
export default function FeatureItem({ img, title, desc }) {
  return (
    <li
      css={`
        max-width: 21.25rem;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        .img {
          width: 4.5rem;
          height: 4.5rem;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .title {
          margin-top: 3rem;
          margin-bottom: 1rem;
          color: var(--dark);
          font-size: 1.125rem;
        }
        .desc {
          line-height: 1.5625rem;
          color: var(--black);
          opacity: 0.6;
        }
      `}
    >
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <h4 className="title">{title}</h4>
      <p className="desc"> {desc}</p>
    </li>
  );
}
