import * as React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { depths, s } from "@shared/styles";
import env from "~/env";
import CompanyIcon from "./Icons/CompanyIcon";

type Props = {
  href?: string;
};

function Branding({ href = env.URL }: Props) {
  return (
    <Link href={href} style={{ maxWidth: "200px", width: "100%" }}>
      <CompanyIcon />
    </Link>
  );
}

const Link = styled.a`
  justify-content: center;
  padding-bottom: 16px;

  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-top-right-radius: 2px;
  color: ${s("text")};
  display: flex;
  align-items: center;

  svg {
    fill: ${s("text")};
  }

  &:hover {
    background: ${s("sidebarBackground")};
  }

  ${breakpoint("tablet")`
    z-index: ${depths.sidebar + 1};
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px;
  `};
`;

export default Branding;
