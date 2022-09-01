import Head from "next/head";
import NavHeader from "../components/NavHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>quiz app</title>
      </Head>
      <NavHeader />
      <div className={styles.container}>
        <div>Hello world</div>
      </div>
    </>
  );
}
