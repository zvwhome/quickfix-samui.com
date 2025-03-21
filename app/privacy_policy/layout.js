export async function generateMetadata({ params }) {
  return {
    title: "Privacy Policy | QUICK FIX Samui",
    alternates: {
      canonical: "privacy_policy",
    },
  };
}

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}
