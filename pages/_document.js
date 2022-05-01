import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						as='style'
						rel='stylesheet preload prefetch'
						href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&family=Quicksand:wght@300;400;700&family=Tapestry&display=swap'
						crossOrigin='anonymous'></link>
				</Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		)
	}
}
export default MyDocument
