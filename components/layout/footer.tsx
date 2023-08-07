import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
        COPYRIGHT &copy; Michael C. Sturman and Hanbo Shim. {currentYear}. ALL
        RIGHTS RESERVED.
      </p>
      <Link
        href="/privacy"
        className="text-gray-500 underline hover:text-gray-600"
      >
        Privacy Policy
      </Link>
      <p></p>
      <Link
        href="/terms-of-use"
        className="text-gray-500 underline hover:text-gray-600"
      >
        Terms of Use
      </Link>
    </div>
  );
}
