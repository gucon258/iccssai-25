export default function Page() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 bg-[url('/bg-pattern.svg')] p-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4E0000] to-[#BE2727]">
        Coming Soon
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light">
        This page will be updated later.
      </p>
      <div className="w-24 h-1 bg-[#F8C907] mx-auto mt-8 rounded-full"></div>
    </div>
  );
}
