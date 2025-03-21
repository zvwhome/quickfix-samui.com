export async function generateMetadata({ params }) {
  return {
    title: "Terms of Services | QUICK FIX Samui",
    alternates: {
      canonical: "terms_of_services",
    },
  };
}

export default function TermsLayout({ children }) {
  return <>{children}</>;
}
