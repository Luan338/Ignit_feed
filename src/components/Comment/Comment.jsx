import React from 'react';
import styles from "./Comment.module.css";
import perfil3 from "../../assets/eupo.jpg";
import { HandsClapping, Trash } from 'phosphor-react';
import Avatar from '../Avatar/Avatar';

export default function Comment() {
  return (
    <section className={styles.container}>
        <Avatar src={perfil3} />
        <div className={styles.contain}>
            <div className={styles.card_comment}>
                <div>
                    <div className={styles.content_profile}>
                        <div>
                            <h3>Luan Eric <span>(Você)</span></h3>
                            <time 
                            title='15 de Agosto de 2022' 
                            dateTime='2022-08-15 21:38'
                            >Cerca de 2h atrás
                            </time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={25} />
                        </button>
                    </div>
                    <h4>Muito bom, nota 0</h4>
                </div>
            </div>
            <a href="#" className={styles.box_interaction}>
                <button>
                    <HandsClapping size={22} />
                    Aplaudir <span>20</span>
                </button>
            </a>

        </div>
    </section>
  )
}

