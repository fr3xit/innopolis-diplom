import styles from './Container.module.scss';

const Сontainer = function ({ child }) {
	return <div className="j">{child()}</div>;
};

export default Сontainer;
