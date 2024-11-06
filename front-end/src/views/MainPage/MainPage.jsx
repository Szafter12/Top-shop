import { Hero } from '../../components/Hero/Hero'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import { useLoaderData } from 'react-router-dom'

export function MainPage() {
	const { heroImageUrl, bestsellers } = useLoaderData()

	return (
		<>
			<Hero url={heroImageUrl} />
			<CenterContent>
				<Products products={bestsellers} heading='Sprwadź nasze bestsellery' />
			</CenterContent>
		</>
	)
}
