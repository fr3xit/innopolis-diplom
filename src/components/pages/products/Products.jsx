import s from './Products.module.scss';

import ProductsList from '../../blocks/ProductsList/ProductsList';

function Products() {
	let sum = 3500;
	let product = 3;
	return (
		<div className={s.products}>
			<header className={s.header}>
				<h2 className={s.title}>Наша продукция</h2>
				<div className={s.basket}>
					<div className="wrap">
						<div className={s.product}>{`${product} товара`}</div>
						<div className={s.sum}>{`на сумму ${sum} ₽`}</div>
					</div>
				</div>
			</header>

			<main className={s.main}>
				<ProductsList />
			</main>
		</div>
	);
}

//  Фикс отступа
setTimeout(() => {
	const $headerHeight = document.querySelector(`.${s.header}`);
	const $main = document.querySelector(`.${s.main}`);
	$main.style.paddingTop = `${$headerHeight.offsetHeight}px`;
}, 10);

export default Products;
