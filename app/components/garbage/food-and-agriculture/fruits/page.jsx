import React from "react";

import breadcrumbs_image from "@/public/components/about.jpg";
import Breadcrumbs from "@/app/components/hooks/Breadcrumbs";
import BuildTogether from "../../../../products/[slug]/BuildTogether";
import ProductGrid from "../../../../products/[slug]/ProductGrid";

export default function ProductTemplate() {
  return (
    <div className="pt-5">
      <Breadcrumbs
        items={[
          {
            page: "Fruits",
            label: "Food & Agriculture",
            href: "",
            image: breadcrumbs_image,
          },
          { label: "Fruits" },
        ]}
      />
      <BuildTogether />
      <ProductGrid />
    </div>
  );
}
