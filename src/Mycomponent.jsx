import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [showRedText, setShowRedText] = useState(false);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	return (
		<>
			<div className={showRedText ? styles.red : styles.white}>Текст</div>
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	);
};
