import styles from '../styles/Quadrado.module.css'
export function Quadrado(props){
    return(
        <div 
            style={{
                backgroundColor: props.preto ? "#000" : "#fff"
            }}
            
            className={styles.quadrado} >

        </div>
    )
}