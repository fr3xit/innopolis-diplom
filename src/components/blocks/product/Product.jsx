import { useSelector } from 'react-redux';
import moduleClassNameBind from 'classnames/bind';
import { useParams, Navigate } from 'react-router-dom';

import Button from '@modules/button/Button';
import SelectedPay from '@groups/selectedPay/SelectedPay';

import stylesProduct from './Product.module.scss';
const classNameProduct = moduleClassNameBind.bind(stylesProduct);

const Product = function () {
	const allProduct = useSelector(state => state.product.allProduct);
	const { id } = useParams();

	if (id > allProduct.length || isNaN(id)) {
		return <Navigate to="/notFound" />;
	} else {
		const {
			title,
			price,
			amount,
			units,
			description: { long: desc },
			img: { url },
		} = allProduct.find(item => item.productId === Number(id));

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
						<Button>В корзину</Button>
					</div>
				</div>
			</div>
		);
	}
};

export default Product;
