import Breadcrumbs from "@/app/components/hooks/Breadcrumbs";
import ProductGrid from "./ProductGrid";
import BuildTogether from "./BuildTogether";


export default async function Page({ params }) {
  // ✅ unwrap params correctly (Next.js 16)
  const { slug } = await params;

  const subCategory = decodeURIComponent(slug);

  return (
    <>
     
      <BuildTogether />
      <ProductGrid subCategory={subCategory} />
    </>
  );
}
