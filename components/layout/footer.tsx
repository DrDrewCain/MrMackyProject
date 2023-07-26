export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
       COPYRIGHT &copy; Michael C. Sturman  and Hanbo Shim. {currentYear}. ALL RIGHTS RESERVED. 
      </p>
    </div>
  );
}
