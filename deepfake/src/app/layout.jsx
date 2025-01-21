import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>DeepFake Detector</title>
        <meta
          name="description"
          content="Detect DeepFakes with Confidence using our cutting-edge AI technology"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
