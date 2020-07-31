import React, { useContext } from 'react';
import { ProductData } from '../App'
// Components
import Product from './Product';

const Products = props => {
	const contextProducts = useContext(ProductData)

	console.log(contextProducts)
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
