import Link from 'next/link'
import styles from './Menu.module.scss'
import { IoIosList } from 'react-icons/io'

export default function Menu({ handleClick }) {
	return (
		<div className={styles.menu}>
			<div className={styles.air}>
				<img src='' alt='' />
				<div className={styles.menuIcon} onClick={() => handleClick()}>
					<IoIosList />
				</div>
			</div>
		</div>
	)
}
