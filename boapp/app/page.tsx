'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from "./components/banner/Banner";
import styles from "./page.module.css";
import './i18n';
import { LineChart } from './components/navBar/chart/Chart';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <LineChart />
    </main>
  );
}
