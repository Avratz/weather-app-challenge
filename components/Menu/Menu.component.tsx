import styles from './Menu.module.scss'
import {
	IoIosList,
	IoIosAddCircleOutline,
	IoIosArrowDropleft,
} from 'react-icons/io'

export default function Menu({ showScreen, screen }) {
	const show = (screenToShow) => {
		return screen === screenToShow ? { display: 'inline' } : { display: 'none' }
	}
	return (
		<div className={styles.menu}>
			<div className={styles.air}>
				<img src='' alt='' />
				<div className={styles.menuIcon}>
					<IoIosList
						onClick={() => showScreen('ListOfCities')}
						style={show('SingleCity')}
					/>
					<IoIosAddCircleOutline
						onClick={() => {
							showScreen('AddCity')
						}}
						style={show('ListOfCities')}
					/>
					<IoIosArrowDropleft
						onClick={() => {
							showScreen('SingleCity')
						}}
						style={show('AddCity')}
					/>
				</div>
			</div>
		</div>
	)
}
