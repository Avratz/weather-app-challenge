import Head from 'next/head'
import Menu from './Menu/Menu.component'

export default function Layout({
	children,
	title,
}: {
	children: React.ReactNode
	title: string
}) {
	return (
		<div className='container'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>{children}</main>
			<Menu />
		</div>
	)
}
