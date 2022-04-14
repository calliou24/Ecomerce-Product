import styles from './cart-items.module.css';
import deleteItemImg from '../../assets/images/icon-delete.svg';
import {motion} from 'framer-motion'


const EmptyCart = () => <p className={styles.emptyCart}>Your cart is empty</p>;

interface Items {
	items: Array<{
		img: string;
		itemName: string;
		price: string;
		count: number
		
	}>;
	deleteItem: (img:string, itemName:string, price:string, count:number) => void
}

const ItemContainer = ({ items, deleteItem }:Items):any => {
	return items.map(({ img, itemName, price, count }) => (
		<motion.div
			initial={{x:'-120%'}}
			animate={{x:0}}
			key={`${itemName}${price}${count}`} 
			className={styles.item}>
			<div className={styles.itemCont}>
				<img className={styles.itemImage} src={img} alt={itemName} />
				<span className={styles.itemInfo}>
					<p className={styles.itemName}>{itemName}</p>
					<div className={styles.itemPriceInfo}>
						<p className={styles.itemPrice}>{'$' + price} x {count}</p>
						<span className={styles.totalPrice}>{'$' + Number(price) * count}</span>
					</div>
				</span>
				<button onClick={()=> deleteItem(img, itemName, price, count)} className={styles.buttonDelete}>
					<img className={styles.itemDelete} src={deleteItemImg} alt="icon delete" />
				</button>
			</div>
		</motion.div>
	));
};

function CartItems({ items, deleteItem }: ItemsPricipal) {
	
	return (
		<motion.div 
			initial={{scaleY : 0}}
			animate={{scaleY : 1,originY: 0}}
			exit={{scaleY: 0}}
			className={styles.items}>
			<p className={styles.title}>Cart</p>
			{
				items.length > 0 
					?
					<>
					<ItemContainer deleteItem={deleteItem} items={items} />
					<button className={styles.checkout}>Checkout</button>
				</>
					: 
				<EmptyCart />
			}
		</motion.div>
	);
}
interface ItemsPricipal {
	items: any;
	deleteItem: (img:string, itemName:string, price:string, count:number) => void
	
}

export default CartItems;
