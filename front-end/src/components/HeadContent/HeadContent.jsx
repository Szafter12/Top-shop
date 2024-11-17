import { HelmetProvider, Helmet } from 'react-helmet-async'

export const HeadContent = ({ children, description }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>{children}</title>
				<meta name='description' content={description} />
			</Helmet>
		</HelmetProvider>
	)
}
