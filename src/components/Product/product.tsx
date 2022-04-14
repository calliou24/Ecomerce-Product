import { useEffect, useState } from 'react';
import DesktopCarrousell from './ImgCarrousell/desktop/desktopCarrousell';
import MobileCarrousell from './ImgCarrousell/mobile/mobileCarrousell';
import styles from './product.module.css';
import productImg from './../../assets/images/image-product-1.jpg';

import minus from '../../assets/images/icon-minus.svg';
import plus from '../../assets/images/icon-plus.svg';
import { ToastContainer } from 'react-toastify';

const CartIcon = () => (
	<svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
			fill="#FFFFFF"
		/>
	</svg>
);



interface Types {
	addToCart : (img:string, itemName:string , price:string, count:number) => void
}

function Product({addToCart}:Types) {
	const [ productCount, setProductCount ] = useState<number>(0);
	const [ width, setWidth ] = useState(window.innerWidth);

	useEffect(
		() => {
			window.addEventListener('resize', () => {
				const actualWidth = window.innerWidth;
				console.log(actualWidth)
				setWidth(actualWidth);
			});
		},
		[ width ]
	);
	const handdleCounter = ( operation: string ) => {
		if(operation === 'add') {
			setProductCount(productCount + 1)
		}
		else if(operation === 'minus') {
			setProductCount(productCount - 1)
		}
	}

	const handdleAddItem = () => {
		if(productCount > 0){
			addToCart(productImg, 'Autum Limited Edition...', '125.0', productCount)
		}
	}

	return (
		<>
		<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			/>
			<div className={styles.productCont}>
				{width <= 800 ? <MobileCarrousell /> : <DesktopCarrousell />}
				<section className={styles.productInfo}>
					<article className={styles.productContent}>
						<span className={styles.brand}>SNEAKER COMPANY</span>
						<h1 className={styles.title}>Fall Limited Edition Sneakers</h1>
						<p className={styles.text}>
							These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
							outer sole, they'll withstand everything the weather can offer
						</p>
					</article>
					<article className={styles.costInfo}>
						<h2 className={styles.price}>$125.00</h2>
						<span className={styles.discount}>50%</span>
						<p className={styles.originalPrice}>$250.00</p>
					</article>
					<article className={styles.counterDetails}>
						<div className={styles.addItem}>
							<div onClick={()=> handdleCounter('minus')} className={styles.iconCont}>
								<img src={minus} alt="minus product count" />
							</div>
							<div className={styles.counter}>{productCount}</div>
							<div onClick={()=> handdleCounter('add') } className={styles.iconCont}>
								<img src={plus} alt="plus product count" />
							</div>
						</div>
						<button onClick={()=> handdleAddItem()} className={styles.addToCart}>
							<span className={styles.buttonText}>
								<CartIcon />
								Add to cart
							</span>
						</button>
					</article>
				</section>
			</div>
		</>
	);
}

export default Product;
