import { useSelector, useDispatch } from 'react-redux';
import moduleClassNameBind from 'classnames/bind';
import { useParams, Navigate } from 'react-router-dom';

import {
	addProductBasket,
	removeProductBasket,
	toggleAddedProduct,
} from '@store/slices/product/product';

import Button from '@modules/button/Button';
import SelectedPay from '@groups/selectedPay/SelectedPay';

import stylesProduct from './Product.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameProduct = moduleClassNameBind.bind(stylesProduct);
const classNameButton = moduleClassNameBind.bind(stylesButton);

const Product = function () {
	const allProduct = useSelector(state => state.product.allProduct);
	const { id } = useParams();
	const dispatch = useDispatch();

	if (id > allProduct.length || isNaN(id)) {
		return <Navigate to="/notFound" />;
	} else {
		const {
			productId,
			added = false,
			title,
			price,
			amount,
			units,
			description: { long: desc },
			img: { url },
		} = allProduct.find(item => item.productId === Number(id));

		const funcButton = () => {
			dispatch(toggleAddedProduct(productId));
			if (added) {
				return dispatch(removeProductBasket(productId));
			} else {
				return dispatch(addProductBasket(productId));
			}
		};

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
						<SelectedPay price={price} amount={amount} units={units} />
						<Button
							func={() => funcButton()}
							mods={[classNameButton('button_full')]}>
							{added ? 'Удалить' : 'В корзину'}
						</Button>
					</div>
				</div>
			</div>
		);
	}
};

export default Product;
