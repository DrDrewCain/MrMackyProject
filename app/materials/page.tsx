import TestingWidget from "@/components/testing-widget";
import Link from "next/link";

const MaterialsPage = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="my-8 bg-white px-4 py-6 shadow">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Materials page
        </h1>
        <p className="mt-6 animate-fade-up text-center text-gray-500 md:text-xl">
          <span className="text-3xl font-bold leading-tight text-gray-900">
            Project will be released in August
          </span>
        </p>
      </div>

      <TestingWidget />

      <footer className="flex justify-between bg-gray-100 px-8 py-4">
        <Link href="/">
          <p className="text-gray-500 hover:text-gray-700">Home</p>
        </Link>
      </footer>
    </div>
  );
};

export default MaterialsPage;
