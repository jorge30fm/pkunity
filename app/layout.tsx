import './globals.css'
import { Providers } from './GlobalRedux/provider'

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
      <body>
        <Providers>{children}</Providers></body>
    </html>
  )
}
