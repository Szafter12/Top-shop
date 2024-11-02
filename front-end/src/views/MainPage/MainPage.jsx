import { Hero } from '../../components/Hero/Hero'
import { Layout } from '../../components/Layout/Layout'
import { CenterContent } from '../../components/CenterContent/CenterContent'
import { Bestsellers } from '../../components/Bestsellers/Bestsellers'
import heroImg from '../../assets/summersale.jpg'

export function MainPage() {
	return (
		<Layout>
			<Hero url={heroImg} />
			<CenterContent> 
				<Bestsellers />
			</CenterContent>
		</Layout>
	)
}
