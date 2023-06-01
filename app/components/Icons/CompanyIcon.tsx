import * as React from "react";
import stores from "~/stores";
import companyLogoDark from "../../../public/images/company-logo-dark.svg";
import companyLogoLight from "../../../public/images/company-logo-light.svg";

export default function CompanyIcon() {
  return stores.ui.resolvedTheme === "dark" ? (
    <img src={companyLogoDark} alt="" />
  ) : (
    <img src={companyLogoLight} alt="" />
  );
}
