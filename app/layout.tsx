import './globals.css'

export const metadata = {
  title: 'PKUnity',
  description: 'Your friend in your PKU journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
