import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEA Church Directory",
  description:
    "International Evangelism Assemblies Church Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}