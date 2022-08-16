import React from "react";
import styles from "./Post.module.css";
import perfil2 from "../../assets/eupo.jpg";
import Comment from "../Comment/Comment";
import Avatar from "../Avatar/Avatar";

export default function Post({}){
  return(
    <article className={styles.Post}>
      <section className={styles.container}>
        <div className={styles.author}>
          <Avatar src={perfil2} text="Perfil"/>
          <div className={styles.authorInfo}>
            <strong>Luan Eric</strong>
            <span>Programador III</span>
          </div>
        </div>

        <time title="13 de Agosto 2022 às 23:27h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </section>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">luan.design/luanzinhodopu</a></p>
        <p> <a href="#">#projetonovo #nlw #rocketseat</a></p>
      </div>

      <footer className={styles.container_footer}>
        <strong>Deixe seu feedback</strong>
        <form>
          <textarea placeholder="Deixe um comentário" />
          <div className={styles.comment_btn}>
            <button className={styles.btn_publish}>Publicar</button>
          </div>
        </form>
      </footer>
      <Comment />
    </article>
  )
}