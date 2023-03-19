import { useSelector, useDispatch } from 'react-redux';
import moduleClassNameBind from 'classnames/bind';
import { useParams } from 'react-router-dom';

import ToPay from '@modules/toPay/ToPay';
import Button from '@modules/button/Button';

import stylesProduct from './Product.module.scss';
const classNameProduct = moduleClassNameBind.bind(stylesProduct);
const Product = function () {
	const { id } = useParams();
	console.log(id);
	const {
		title,
		price,
		description: { long: desc },
		img: { url },
	} = useSelector(state =>
		state.product.allProduct.find(item => item.productId === Number(id))
	);

	return (
		<div className={classNameProduct('product')}>
			<div className={classNameProduct('product__img')}>
				<img src={url} alt="" />
			</div>

			<div className="product__content">
				<h3 className={classNameProduct('product__title')}>{title}</h3>
				<div className={classNameProduct('product__desc')}>
					<p>{desc}</p>
				</div>

				<div className={classNameProduct('product__footer')}>
					<ToPay sum={price} />
					<Button>В корзину</Button>
				</div>
			</div>
		</div>
	);
};

export default Product;
