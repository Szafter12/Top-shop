import { useState } from 'react'
import ARROW from '../../assets/arrow.svg'
import styles from './Acordion.module.css'
export function Acordion({ items }) {
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<ul className={styles.acordion}>
			{items.map((item, index) => {
				return (
					<li key={item.title}>
						<button onClick={() => setActiveIndex(index)}>
							<p>{item.title}</p>
							<img className={activeIndex === index ? styles.expanded : ''} src={ARROW} alt='' />
						</button>
						{activeIndex === index && <p>{item.text}</p>}
					</li>
				)
			})}
		</ul>
	)
}
