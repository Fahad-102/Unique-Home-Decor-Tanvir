import { Josefin_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "DARNA - PROPERTY TRANSFORMATION STUDIO",
  description: "Reviving Spaces, Creating Memories",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${josefinSans.className}  h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
