export const metadata = {
  title: 'Backend | Deutscher Pavillion',
  description: 'Welcome to the Backend of Deutscher Pavillion',
}

export default function RootLayout({
  children}) {
 return (
    <html>
      <body>{children}</body>
    </html>
  )
}
