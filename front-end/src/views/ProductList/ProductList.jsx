import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLoaderData, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants/category'

export function ProductList() {
	const { products, numberOfPages } = useLoaderData()
	const params = useParams()

	const foundCategory = CATEGORIES.find(c => c.path === params.category)

	let foundSubCategory

	if (params.subcategory) {
		foundSubCategory = foundCategory.subcategories.find(sc => sc.path === params.subcategory)
	}

	return (
		<CenterContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<Products
						products={products}
						heading={foundSubCategory ? foundSubCategory.categoryName : foundCategory.categoryName}
					/>
				</div>
			</FlexContainer>
			<Pagination numbersOfPages={numberOfPages} />
		</CenterContent>
	)
}
