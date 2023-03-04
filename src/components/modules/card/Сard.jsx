import s from './Сard.module.css';

function Card({
	data: {
		title,
		desc,
		units,
		price,
		amount,
		img: { url, alt },
	},
}) {
	let dimension;

	alt = alt ? alt : title;

	switch (units) {
		case 'grams':
			dimension = 'г';
			break;
		case 'pieces':
			dimension = 'шт';
			break;
		default: {
			dimension = 'шт';
		}
	}

	if (title.length > 25) {
		title = title.substring(0, 25) + '...';
	}

	return (
		<div className={s.card}>
			<header>
				<img className={s.img} src={url} alt={alt} />
			</header>

			<main className={s.main}>
				<h3 className={s.title}>{title}</h3>
				<div className={s.desc}>
					<p>{desc}</p>
				</div>
			</main>

			<footer className={s.footer}>
				<div className={s.price}>
					<span className={s.priceText}>{price + ' ₽'}</span>
					<span className={s.amountText}>{` / ${amount} ${dimension} .`}</span>
				</div>

				<div className={s.button}>
					<span className={s.lineOne}></span>
					<span className={s.lineTwo}></span>
				</div>
			</footer>
		</div>
	);
}

export default Card;
