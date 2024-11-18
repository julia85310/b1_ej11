'use client';
import ProductStock from "./ProductStock";

export default function Home() {
  return (<>
      <ProductStock inStock={true}></ProductStock>
      <ProductStock inStock={false}></ProductStock>
    </>
  );
}
