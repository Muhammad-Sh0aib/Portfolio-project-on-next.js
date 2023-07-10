import './globals.scss'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Shoaib | Frontend Web Developer',
  description: 'Personal portfolio develop by Muhammad Shoaib.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
