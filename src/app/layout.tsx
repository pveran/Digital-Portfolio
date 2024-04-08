import Link from "next/link"

export const metadata = {
  title: 'Digital Portfolio Pablo',
  description: 'My digital portfolio to highlight my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <h2><Link href="/">Digital Website</Link></h2>
        </header>   
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Contact me at:</p>
        </footer>
      </body>
    </html>
  )
}
