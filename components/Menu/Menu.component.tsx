import Link from 'next/link'
import styles from './Menu.module.scss'
import { IoIosList } from 'react-icons/io'

export default function Menu() {
	return (
		<div className={styles.menu}>
			<div className={styles.air}>
				<img src='' alt='' />
				<Link href='/cities'>
					<a>
						<IoIosList />
					</a>
				</Link>
			</div>
		</div>
	)
}
