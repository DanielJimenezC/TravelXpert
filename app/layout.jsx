import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelXperts',
  description: 'Descubre el mundo con los expertos en viajes. Encuentra los mejores paquetes de viajes a destinos exóticos, emocionantes aventuras y escapadas relajantes. Nuestro equipo de expertos en viajes te guiará para crear experiencias inolvidables, personalizadas según tus preferencias. ¡Explora el mundo con confianza y deja que TravelXperts haga realidad tus sueños de viaje!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
