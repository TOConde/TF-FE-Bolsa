'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from "./components/banner/Banner";
import styles from "./page.module.css";
import './i18n';
import { MainBody } from './components/mainBody/MainBody';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <MainBody />
      <AboutUs />
      <Footer />
    </main>
  );
}
