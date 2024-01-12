export const metadata = {
  title: 'Backend | Deutscher Pavillon',
  description: 'Welcome to the Backend of Deutscher Pavillon',
}

export default function RootLayout({
  children}) {
 return (
    <html>
      <body>{children}</body>
    </html>
  )
}
