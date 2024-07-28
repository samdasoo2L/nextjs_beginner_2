import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/sellers-list.module.css";

export async function getList() {
  const data = (await fetch(`${API_URL}/lists`)).json();
  return data;
}

export default async function SellersList() {
  const list = await getList();
  // console.log(list);/
  return (
    <div className={styles.items}>
      {list.results.map((item) => (
        <Link
          className={styles.item}
          key={item.list_name_encoded}
          prefetch
          href={`/list/${item.list_name_encoded}`}
        >
          {item.display_name} &rarr;
        </Link>
      ))}
    </div>
  );
}
