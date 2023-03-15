import '@/app/globals.css'
import Providers from './Providers'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

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
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  )
}
