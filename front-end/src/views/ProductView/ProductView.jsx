import { CenterContent } from '../../components/CenterContent/CenterContent'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Photos } from '../../components/Photos/Photos'
import { Details } from '../../components/Details/Details'
import { useLoaderData } from 'react-router-dom'

export function ProductView() {
	const product = useLoaderData()

	return (
		<CenterContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<FlexContainer column={800}>
						<Photos photos={product.photos} />
						<Details product={product} />
					</FlexContainer>
				</div>
			</FlexContainer>
		</CenterContent>
	)
}
