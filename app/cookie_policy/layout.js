export async function generateMetadata({ params }) {
  return {
    title: "Cookie Policy | QUICK FIX Samui",
    alternates: {
      canonical: "cookie_policy",
    },
  };
}

export default function CookieLayout({ children }) {
  return <>{children}</>;
}
