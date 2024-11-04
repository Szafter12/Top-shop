import { Hero } from '../../components/Hero/Hero'
import { Layout } from '../../components/Layout/Layout'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Products } from '../../components/Products/Products'
import heroImg from '../../assets/summersale.jpg'

export function MainPage() {
	return (
		<Layout>
			<Hero url={heroImg} />
			<CenterContent>
				<Products heading='Sprwadź nasze bestsellery' />
			</CenterContent>
		</Layout>
	)
}
