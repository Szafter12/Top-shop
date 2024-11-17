import { Hero } from '../../components/Hero/Hero'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import { useLoaderData } from 'react-router-dom'
import { AddModal } from '../../components/AddModal/AddModal'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { HeadContent } from '../../components/HeadContent/HeadContent'

export function MainPage() {
	const { heroImageUrl, bestsellers } = useLoaderData()
	const [isModalActive, setIsModalActive] = useContext(ModalContext)

	return (
		<>
			<HeadContent description='Strona główna sklepu Top Shop'>Strona główna</HeadContent>
			<Hero url={heroImageUrl} />
			<CenterContent>
				<Products setIsModalActive={setIsModalActive} products={bestsellers} heading='Sprwadź nasze bestsellery' />
				<AddModal isModalActive={isModalActive}>Ulubionych</AddModal>
			</CenterContent>
		</>
	)
}
