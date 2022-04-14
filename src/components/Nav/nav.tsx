import { useState, useEffect } from 'react';
import styles from './nav.module.css';

import logo from '../../assets/images/logo.svg';
import profilePic from '../../assets/images/image-avatar.png';
import cart from '../../assets/images/icon-cart.svg';
import CartItems from '../CartItems/CartItems';
import { AnimatePresence } from 'framer-motion';

const listOptions = [ 'Collections', 'Man', 'Women', 'About', 'Contact' ];

interface Item {
		img: string
		itemName: string
		price : string
}

function Nav({itemsList, deleteItem}:any) {
	const [ openMenu, setOpenMenu ] = useState(false);
  const [ visibleMenu, setVisibleMenu] = useState(false)

	useEffect(()=> {
		const body = document.body
		if(openMenu){
			body.classList.add('openMenu')
		}
		else {
			body.removeAttribute('class')
		}
	}, [ openMenu ])

	return (
		<nav className={styles.nav}>
			<div className={styles.firstCont}>
				<div onClick={() => setOpenMenu(!openMenu)} className={styles.hamburger}>
					<div id={openMenu ? styles.bar1 : undefined} className={styles.bar} />
					<div id={openMenu ? styles.bar2 : undefined} className={styles.bar} />
					<div id={openMenu ? styles.bar3 : undefined} className={styles.bar} />
				</div>
				<div className={styles.logoCont}>
					<img src={logo} alt="brand logo" className={styles.logo} />
				</div>
				<div id={openMenu ? styles.openMenu : undefined} className={styles.listCont}>
					<ul className={styles.list}>
						{listOptions.map((e) => (
							<li key={e} className={styles.item}>
								{e}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.profileCont}>
				<div onClick={()=> setVisibleMenu(!visibleMenu)} className={styles.cart}>
					<img className={styles.cartImg} src={cart} alt="cart icon" />
					<span className={styles.itemsLeft}>{itemsList.length}</span>
				</div>
				<div className={styles.profileImgCont}>
					<img className={styles.profileImg} src={profilePic} alt="profile picture" />
				</div>
			</div>
		<AnimatePresence exitBeforeEnter>
      	{visibleMenu && <CartItems deleteItem={deleteItem} items={ itemsList }/>}
			</AnimatePresence>
			{openMenu && <div className={styles.fadeBG} />}
		</nav>
	);
}

export default Nav;
