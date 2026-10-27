import "./globals.css";

export const metadata = {
  title: "3D Room Modeling — design your home in 3D",
  description:
    "3D Room Modeling is a free, open-source browser studio for designing your dream home in 3D. Drag rooms and furniture onto a live blueprint — no installs, no CAD degree.",
  openGraph: {
    title: "3D Room Modeling — design your home in 3D",
    description:
      "Drag rooms and furniture onto a live 3D blueprint. Free, open-source, runs in your browser.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b1020",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
