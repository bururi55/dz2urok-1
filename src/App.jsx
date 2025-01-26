import ReactLogo from './assets/react.svg?react';
import { MyComponent } from './Mycomponent';
import styles from './index.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles.appHeader}>Hello World</h1>
			<ReactLogo />
			<MyComponent />
		</div>
	);
};
