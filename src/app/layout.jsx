import Header from '@/components/Header'
import '@/app/globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* Header */}
        <Header />

        {/* Nav Bar */}

        {/* Search Box */}
        {children}
      </body>
    </html>
  )
}
