import React, { useCallback } from 'react';

import Button from '../Button';
import { clearStorage } from '../../utils/tiles';

import styles from './Header.module.css';

function Header() {
	const restartGame = useCallback(() => {
		clearStorage();
		document.location.reload();
	}, [])
	return (
		<div className={styles.root}>
			<Button title="Restart" onClick={restartGame}/>
		</div>
	)
}

export default Header;
