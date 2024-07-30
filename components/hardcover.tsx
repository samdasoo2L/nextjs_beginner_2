import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/hardcover.module.css";

export async function getDetail(id: string) {
  const data = (await fetch(`${API_URL}/list?name=${id}`)).json();
  return data;
}

export default async function Hardcover({ id }: { id: string }) {
  const detail = await getDetail(id);
  // console.log(detail.results);
  return (
    <div>
      <div className={styles.title}>{detail.results.list_name}</div>
      <div className={styles.bookbox}>
        {detail.results.books.map((item) => (
          <div key={item.rank} className={styles.book}>
            <img className={styles.bookimg} src={item.book_image} />
            <div className={styles.booktitle}>{item.title}</div>
            <div className={styles.bookauthor}>{item.author}</div>
            <a
              className={styles.bookbuy}
              target={"_blank"}
              href={item.amazon_product_url}
            >
              Buy now &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
