import Head from 'next/head'

export default function Layout({
	children,
	title,
	background,
}: {
	children: React.ReactNode
	title: string
	background?: string
}) {
	return (
		<main className='container'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</main>
	)
}
