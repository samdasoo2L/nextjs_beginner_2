import { Suspense } from "react";
import Hardcover, { getDetail } from "../../../components/hardcover";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const detail = await getDetail(id);
  return {
    title: detail.results.list_name,
  };
}

export default function SellersDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hardcover id={id} />
      </Suspense>
    </div>
  );
}
