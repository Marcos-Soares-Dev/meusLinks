export default function Button({ urlLink, children }) {
  return (
    <a
      href={urlLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center gap-2 items-center w-full"
    >
      <button
        type="button"
        className="w-full flex justify-center items-center gap-2 text-lg text-white font-bold bg-gradient-to-br from-green-400 to-blue-600 
          hover:bg-gradient-to-bl  rounded-lg px-5 py-2.5 
          me-2 mb-2 transition-all duration-300 ease-in-out transform hover:scale-105"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        {children}
      </button>
    </a>
  );
}
