import { useState } from 'react';
import Nav from './components/Nav/nav';
import Product from './components/Product/product';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Item {
	img: string;
	itemName: string;
	price: string;
	count: number;
}

function App() {
	const [ itemList, setItemList ] = useState<Array<Item>>([]);

	const addToCart = (img: string, itemName: string, price: string, count: number) => {
		const newItem: Item = { img: img, itemName: itemName, price: price, count: count };
    let availableToAdd = true

    for(let i = 0; i < itemList.length; i++){
      const { img, itemName, price, count } = itemList[i];
      if (
				img === newItem.img &&
				itemName === newItem.itemName &&
				price === newItem.price &&
				count === newItem.count
			) {
        availableToAdd = false
        toast('Your Item alrady exist on the cart')
			}
    }
    if(availableToAdd){
      setItemList([ ...itemList, newItem ]);
    }
	};

  const deleteItem = (image: string, name: string, cost: string, counter: number) =>{
    const newList = itemList.filter( e => {
      const { img, itemName, price, count } = e;
      if(
        img === image &&
				itemName === name &&
				price === cost &&
				count === counter
      ){
        return 
      } 
      return e
    })
    setItemList(newList)
  }

	return (
		<main className="App">
			<Nav deleteItem={deleteItem} itemsList={itemList} />
			<Product addToCart={addToCart} />
		</main>
	);
}

export default App;
