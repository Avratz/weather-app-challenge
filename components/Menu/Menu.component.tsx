import styles from './Menu.module.scss'
import {
	IoIosList,
	IoIosAddCircleOutline,
	IoIosArrowDropleft,
} from 'react-icons/io'

export default function Menu({ handleClick, visible, handleAddCity, newCity }) {
	return (
		<div className={styles.menu}>
			<div className={styles.air}>
				<img src='' alt='' />
				<div className={styles.menuIcon}>
					<IoIosList
						onClick={() => handleClick(!visible)}
						style={
							visible || newCity ? { display: 'none' } : { display: 'inline' }
						}
					/>
					<IoIosAddCircleOutline
						onClick={() => {
							handleAddCity(!newCity)
						}}
						style={
							!visible || newCity ? { display: 'none' } : { display: 'inline' }
						}
					/>
					<IoIosArrowDropleft
						onClick={() => {
							handleAddCity(!newCity)
							handleClick(!visible)
						}}
						style={!newCity ? { display: 'none' } : { display: 'inline' }}
					/>
				</div>
			</div>
		</div>
	)
}
