"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {
  return (
    <html className="bg-white
    " lang="en">
      <ThirdwebProvider>
      <body>{children}</body>
      </ThirdwebProvider>
    </html>
  )
}
