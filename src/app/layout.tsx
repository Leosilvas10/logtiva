import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        {/* Favicon multi-tamanhos */}
        <link rel="icon" type="image/x-icon" href="/logtiva.ico" sizes="192x192" />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
