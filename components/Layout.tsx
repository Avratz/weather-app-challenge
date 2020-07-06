import Head from 'next/head'

export default function Layout({
	children,
	title,
	className,
}: {
	children: React.ReactNode
	title: string
	className?: string
}) {
	return (
		<main className={`container ${className}`}>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
				/>
			</Head>
			<div className='wrapper'>{children}</div>
		</main>
	)
}
