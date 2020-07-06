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
			</Head>
			{children}
		</main>
	)
}
