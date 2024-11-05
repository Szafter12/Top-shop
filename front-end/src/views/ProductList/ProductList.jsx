import { Layout } from '../../components/Layout/Layout'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import { Pagination } from '../../components/Pagination/Pagination'
import styles from './ProductList.module.css'

export function ProductList() {
	return (
		<Layout>
			<CenterContent>
				<FlexContainer>
					<ExpandableMenu />
					<div className={styles.main}>
						<Breadcrumbs />
						<Products heading='Swetry' />
					</div>
				</FlexContainer>
				<Pagination numbersOfPages={4} />
			</CenterContent>
		</Layout>
	)
}
