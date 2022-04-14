import productImage1 from '../../../../assets/images/image-product-1.jpg';
import productImage2 from '../../../../assets/images/image-product-2.jpg';
import productImage3 from '../../../../assets/images/image-product-3.jpg';
import productImage4 from '../../../../assets/images/image-product-4.jpg';

//product Icons
import productImageIcon1 from '../../../../assets/images/image-product-1-thumbnail.jpg';
import productImageIcon2 from '../../../../assets/images/image-product-2-thumbnail.jpg';
import productImageIcon3 from '../../../../assets/images/image-product-3-thumbnail.jpg';
import productImageIcon4 from '../../../../assets/images/image-product-4-thumbnail.jpg';

import styles from './desktop-carrousell.module.css';
import { useState } from 'react';

function DesktopCarrousell() {
	const images = [
		<img className={styles.image} src={productImage1} alt="Product Image" />,
		<img className={styles.image} src={productImage2} alt="Product Image" />,
		<img className={styles.image} src={productImage3} alt="Product Image" />,
		<img className={styles.image} src={productImage4} alt="Product Image" />
	];

	const [ actualImage, setActualImage ] = useState(images[0]);

  const changeImage = (image : number) => {
    if(image === 0){
      setActualImage(images[0])
    }
    else if(image === 1){
      setActualImage(images[1])
    }
    else if(image === 2){
      setActualImage(images[2])
    }
    else if(image === 3){
      setActualImage(images[3])
    }
  }

	return (
		<div className={styles.imageSelector}>
			<div className={styles.actualImage}>
        {actualImage}
      </div>
			<div className={styles.setImage}>
				<button onClick={()=> changeImage(0)} className={styles.changeImage}>
					<img src={productImageIcon1} alt="Product Image Icon" className={styles.productIcon} />
				</button>
				<button onClick={()=> changeImage(1)} className={styles.changeImage}>
					<img src={productImageIcon2} alt="Product Image Icon" className={styles.productIcon} />
				</button>
				<button onClick={()=> changeImage(2)} className={styles.changeImage}>
					<img src={productImageIcon3} alt="Product Image Icon" className={styles.productIcon} />
				</button>
				<button onClick={()=> changeImage(3)} className={styles.changeImage}>
					<img src={productImageIcon4} alt="Product Image Icon" className={styles.productIcon} />
				</button>
			</div>
		</div>
	);
}

export default DesktopCarrousell;
