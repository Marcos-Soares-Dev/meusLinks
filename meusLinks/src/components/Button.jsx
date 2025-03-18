export default function Button({urlLink, children}) {
  return (
    <a href={urlLink}
    target="_blank">
    <button
      type="button"      
      class="flex w-full items-center gap-1 text-white bg-gradient-to-br from-green-400 to-blue-600 
         hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 
         dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
         me-2 mb-2 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </button>
    </a>
  );
}
