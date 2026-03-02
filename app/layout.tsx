import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

interface RootLayoutProps {
	children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}

export default RootLayout
