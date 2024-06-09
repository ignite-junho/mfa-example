import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import RemoteButtonType from "../@mf-types/reactRemote/Button";

const ReactRemoteButton = dynamic(() => import("reactRemote/Button"), {
  ssr: false,
}) as unknown as typeof RemoteButtonType;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        dasd
        <ReactRemoteButton size="small" />
        <div>qweqwe</div>
      </main>
    </div>
  );
};

export default Home;
