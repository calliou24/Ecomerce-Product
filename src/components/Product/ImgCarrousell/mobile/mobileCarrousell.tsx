import styles from './mobile-carrousell.module.css';
import productImg1 from './../../../../assets/images/image-product-1.jpg';
import productImg2 from './../../../../assets/images/image-product-2.jpg';
import productImg3 from './../../../../assets/images/image-product-3.jpg';
import productImg4 from './../../../../assets/images/image-product-4.jpg';
import angleArrow from '../../../../assets/images/icon-next.svg';
import { useState } from 'react';

function MobileCarrousell() {

	
	const images = [
		<img className={styles.img} src={productImg1} alt="product img" />,
		<img className={styles.img} src={productImg2} alt="product img" />,
		<img className={styles.img} src={productImg3} alt="product img" />,
		<img className={styles.img} src={productImg4} alt="product img" />
	]

	const [actualImage, setActualImage] = useState(images[0])
	const [indexImage, setIndexImage] = useState(0)

	const handdleButton = (direcction : string) => {
		
		if(direcction === 'prev'){
			if( indexImage === 0){
				return 
			}
			 setIndexImage(indexImage - 1)
			
		}
		else if (direcction === 'next'){
			if( indexImage === 3){
				return 
			}
			 setIndexImage(indexImage + 1)
		}

		return setActualImage(images[indexImage])
	}

	return (
		<div className={styles.carrousell}>
			<div onClick={()=> handdleButton('prev')} className={styles.changeImg} id={styles.prevImg}>
				<img className={styles.iconAngle} id={styles.iconPrev} src={angleArrow} alt="prev image icon" />
			</div>
			<div className={styles.imgsCont}>
				{actualImage}
				{indexImage}
			</div>
			<div onClick={()=> handdleButton('next')} className={styles.changeImg} id={styles.nextImg}>
				<img className={styles.iconAngle} id={styles.iconNext} src={angleArrow} alt="next image icon" />
			</div>
		</div>
	);
}

export default MobileCarrousell;
