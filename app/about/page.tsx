import { Metadata } from "next";
import style from "../../styles/home-layout.module.css";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <div className={style.about}>
      <div>About Us🍊</div>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </div>
  );
}
