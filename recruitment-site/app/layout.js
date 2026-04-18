import './globals.css';

export const metadata = {
  title: 'Generic Recruitment Agency',
  description: 'DMW-registered and accredited placement and recruitment agency website template.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
