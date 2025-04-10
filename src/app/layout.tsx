import './globals.css';
import '../assets/styles/global.css';
import '../assets/styles/components.css';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

export const metadata = {
  title: 'LabubUIT - Trang chủ',
  description: 'Mua sắm các sản phẩm Labubu chất lượng cao',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
