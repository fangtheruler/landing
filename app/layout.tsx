export const metadata = {
  title: "Neon Tech Landing",
  description: "Технологичный лендинг с кнопкой в Twitter"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
