// app/components/header/HeaderActions.tsx
import Link from "next/link";

export function HomeAndContactActions() {
  return (
    <>
      <Link
        href="/"
        className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Home
      </Link>
      <a
        href="mailto:gasteren@gmail.com"
        className="hidden rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:inline-flex"
      >
        Contact
      </a>
    </>
  );
}
