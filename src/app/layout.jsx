import '@/app/globals.css'
import Providers from './Providers'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Nav Bar */}
          <Navbar />

          {/* Search Box */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
