import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLoaderData, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants/category'

export function ProductList() {
	const products = useLoaderData()
	const params = useParams()

	const foundCategory = CATEGORIES.find(c => c.path = params.category)

	return (
		<CenterContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<Products products={products} heading={foundCategory.categoryName} />
				</div>
			</FlexContainer>
			<Pagination numbersOfPages={4} />
		</CenterContent>
	)
}
