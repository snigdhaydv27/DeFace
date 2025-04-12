import './globals.css'

export const metadata = {
  title: 'DeFace',
  description: 'A modern authentication system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
