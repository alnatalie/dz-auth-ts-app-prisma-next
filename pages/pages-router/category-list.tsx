import { CategoryList } from "@/components/category-list";
import { $categories } from "@/store/api";
import { useStore } from "@nanostores/react";

export default function Page() {
  const { data, loading, error } = useStore($categories);
  if (data) return <CategoryList categories={data} />;
  if (loading) return <>Loading...</>;
  return <>Error!={String(error)}</>;
}
