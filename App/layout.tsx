import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ServiceWorkerRegistration } from "../components/service-worker-registration";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Sonnenhaus Kindergarten",
  description: "Everything families need to know in one place.",
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sonnenhaus"
  }
};

export const viewport: Viewport = {
  themeColor: "#F6B73C",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
