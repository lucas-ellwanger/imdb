import Header from '@/components/Header'
import '@/app/globals.css'
import Providers from './Providers'

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

          {/* Search Box */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
