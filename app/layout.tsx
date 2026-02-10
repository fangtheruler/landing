export const metadata = {
  title: "ClawdSearcher",
  description: "We are looking for gems at an early stage in the Clawd ecosystem.",
  openGraph: {
    title: "ClawdSearcher",
    description: "We are looking for gems at an early stage in the Clawd ecosystem.",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawdSearcher",
    description: "We are looking for gems at an early stage in the Clawd ecosystem.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
