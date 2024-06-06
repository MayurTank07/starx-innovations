import './globals.scss'
import './styles/Sections.scss'
import Script from 'next/script'
import Navbar from './components/ui/navigation/Navbar'
import Strips from './components/ui/strips/Strips'
import Footer from './components/ui/navigation/Footer'
import Homepage_Loader_Wrapper from './components/ui/loaders/Homepage_Loader_Wrapper '
import Animation_Wrapper from './components/ui/transitions/Animation_Wrapper'

export const metadata = {
	title: 'starx',
	description:
		'YAAHA KA CONTENT CHAHIYE',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-JH1ZN3CD7V"
				></Script>
				<Script id="google-analytics">
					{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-JH1ZN3CD7V');
                    `}
				</Script>
			</head>
			<body suppressHydrationWarning={true}>
				<Homepage_Loader_Wrapper>
					<Animation_Wrapper>
						<Navbar />
						<Strips />
						{children}
						<Footer />
					</Animation_Wrapper>
				</Homepage_Loader_Wrapper>
			</body>
		</html>
	)
}
