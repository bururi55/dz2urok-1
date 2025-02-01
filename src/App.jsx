import React, { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите новое значение');
		if (promptValue.length < 3) {
			setError('Значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const isValueValid = value.length >= 3;

	const onAddButtonClick = () => {
		if (isValueValid) {
			const updatedList = [
				...list,
				{ id: Date.now(), value, createdAt: new Date().toLocaleString() },
			];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Заголовок</h1>
			<output className={styles.output}>{value}</output>
			<button className={styles['input-button']} onClick={onInputButtonClick}>
				Ввести новое
			</button>
			<button
				className={styles['add-button']}
				onClick={onAddButtonClick}
				disabled={!isValueValid}
			>
				Добавить в список
			</button>
			{error && <div className={styles.error}>{error}</div>}
			<ul className={styles.list}>
				{list.length === 0 ? (
					<li>Нет добавленных элементов</li>
				) : (
					list.map((item) => (
						<li key={item.id}>
							{item.value} ({item.createdAt})
						</li>
					))
				)}
			</ul>
		</div>
	);
};
