import React from "react";
import styles from "./Sidebar.module.css";
import developer from "../../assets/developer.jpg";
import perfil from "../../assets/eupo.jpg";
import {PencilLine} from "phosphor-react";


export default function Sidebar(){
  return(
    <aside className={styles.container_aside}>
        <img className={styles.background_img} src={developer} />
        <img className={styles.perfil} src={perfil} alt="Foto perfil"/>
        <div className={styles.profile}>
            <strong>Luan Eric</strong>
            <span>Programador III</span>
        </div>
        <footer>
            <a className={styles.btnEdit} href="#">
              <PencilLine size={25} />
              Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}