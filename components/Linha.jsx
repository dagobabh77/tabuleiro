import { Quadrado } from "./Quadrado";

import styles from '../styles/Linha.module.css'

export default function Linha(props){
    return(
        props.impar ?
        <div className={styles.linha} >
            <Quadrado preto />
            <Quadrado  />
            <Quadrado preto />
            <Quadrado  />
            <Quadrado preto />
            <Quadrado  />
            <Quadrado preto />
            <Quadrado  />
        </div> :
        <div className={styles.linha} >
            <Quadrado  />
            <Quadrado preto />
            <Quadrado  />
            <Quadrado preto />
            <Quadrado  />
            <Quadrado preto />
            <Quadrado  />
            <Quadrado preto />
        </div>         
    )

}