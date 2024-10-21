'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from "./components/banner/Banner";
import styles from "./page.module.css";
import './i18n';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  );
}
