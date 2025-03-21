export async function generateMetadata({ params }) {
  return {
    title: "Imprints | QUICK FIX Samui",
    alternates: {
      canonical: "imprint",
    },
  };
}

export default function ImprintsLayout({ children }) {
  return <>{children}</>;
}
