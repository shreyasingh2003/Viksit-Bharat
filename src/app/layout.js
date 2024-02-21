import { Inter, Poppins, Khand } from "next/font/google";
import "./globals.css";

const khand = Khand({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Viksit Bharat",
  description: "Viksit Bharat Shaheed Rajguru College of Applied Sciences for Women, University of Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={khand.className}>{children}</body>
    </html>
  );
}
