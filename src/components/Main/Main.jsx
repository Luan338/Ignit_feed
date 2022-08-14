import React from "react";
import Post from "../Posts/Post";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";

export default function Main(){
  return(
    <section className={styles.wrapper}>
      <Sidebar />
      <div>
        <Post/>
        <Post/>
      </div>
    </section>
  )
}