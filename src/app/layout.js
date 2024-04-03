import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navigation from "@/components/navigation/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Disney south Africa | The Official home for all things disney",
  description: "disney.co.za cloned by Anthony David",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
