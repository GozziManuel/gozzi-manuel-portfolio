// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Layout head/imports
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";

//
import { geistSans, geistMono } from "./fonts/font";

// **Fonts

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Bootstrap ICONS Import */}
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      {/*  */}
      {/*  */}
      <body>
        <Navbar />
        <div className="ContainerBody">{children}</div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
