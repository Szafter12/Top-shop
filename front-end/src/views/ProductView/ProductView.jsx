import { CenterContent } from '../../components/CenterContent/CenterContent'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Photos } from '../../components/Photos/Photos'
import { Details } from '../../components/Details/Details'
import { useLoaderData } from 'react-router-dom'
import { AddModal } from '../../components/AddModal/AddModal'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

export function ProductView() {
	const product = useLoaderData()
	const [isModalActive, setIsModalActive] = useContext(ModalContext)

	return (
		<CenterContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<FlexContainer column={800}>
						<Photos photos={product.photos} />
						<Details setIsModalActive={setIsModalActive} product={product} />
					</FlexContainer>
				</div>
			</FlexContainer>
			<AddModal isModalActive={isModalActive}>Koszyka</AddModal>
		</CenterContent>
	)
}
