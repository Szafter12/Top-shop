import { Layout } from '../../components/Layout/Layout'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'

export function ProductList() {
	return (
		<Layout>
			<CenterContent>
				<FlexContainer>
					<ExpandableMenu />
					<div style={{width: "100%"}}>
						<Breadcrumbs />
						<Products heading='Swetry' />
					</div>
				</FlexContainer>
			</CenterContent>
		</Layout>
	)
}
