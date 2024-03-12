import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "DrawDash: Your Ultimate Destination for Effortless Note-taking and Drawing",
  description:
    "DrawDash simplifies note-taking and drawing with its intuitive SAAS platform. Capture your ideas seamlessly with notes and drawings all in one place. Try DrawDash today for an organized and creative experience!",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers key="providers">{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
