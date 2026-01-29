import Breadcrumbs from "@/app/components/hooks/Breadcrumbs";
import ProductGrid from "./ProductGrid";
import BuildTogether from "./BuildTogether";
import WhyChoose from "@/app/components/homepage/WhyChoose";
import FAQ from "@/app/components/homepage/FAQ";
import RequestQuote from "@/app/components/homepage/RequestQuote";

export default async function Page({ params }) {
  const { slug } = await params;
  const subCategory = decodeURIComponent(slug);

  return (
    <>
      <BuildTogether />
      <ProductGrid subCategory={subCategory} />
      <WhyChoose/>
      <FAQ/>
      <RequestQuote/>
    </>
  );
}
