import { Metadata } from "next";
import SellersList from "../components/sellers-list";
import styles from "../styles/home-layout.module.css";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div>
      <div className={styles.home}>The New York Times Best Seller Explorer</div>
      <SellersList />
    </div>
  );
}
