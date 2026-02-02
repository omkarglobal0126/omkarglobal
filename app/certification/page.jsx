import React from "react";
import Breadcrumbs from "../components/hooks/Breadcrumbs";
import Certifications from "./Certifications";
import breadcrumbs_image from "@/public/components/about.jpg";

export default function page() {
  return (
    <div>
      <Breadcrumbs
        items={[
          {
            label: "Certification",
            page: "Certification",
            image:
              "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952221/2151998695_wyvqa3.jpg",
          },
        ]}
      />
      <Certifications />
    </div>
  );
}
