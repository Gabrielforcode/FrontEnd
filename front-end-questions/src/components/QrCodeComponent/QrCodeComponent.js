import React from 'react'
import styles from './QrCodeComponent.module.css'
import img from './img/image-qr-code.png'


const QrCodeComponent = () => {
  return (
    <body className={styles.bodyQrCode}>
      <div className={styles.conteudo}>
        <div className={styles.content}>
          <img src={img} alt=""  className={styles.imagem}/>
          <h2>improve your front-end skills by building projects.</h2>
          <p>scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
        </div>
      </div>


 
    </body>
  )
}

export default QrCodeComponent