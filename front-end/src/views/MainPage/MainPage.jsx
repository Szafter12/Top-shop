import { Hero } from '../../components/Hero/Hero'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import { useLoaderData } from 'react-router-dom'
import AddModal from '../../components/AddModal/AddModal'
import { useState } from 'react'

export function MainPage() {
	const { heroImageUrl, bestsellers } = useLoaderData()
	const [isModalActive, setIsModalActive] = useState(false)
	return (
		<>
			<Hero url={heroImageUrl} />
			<CenterContent>
				<Products setIsModalActive={setIsModalActive} products={bestsellers} heading='Sprwadź nasze bestsellery' />
			</CenterContent>
			<AddModal isModalActive={isModalActive}>Ulubionych</AddModal>
		</>
	)
}
