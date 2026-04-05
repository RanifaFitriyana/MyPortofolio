export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-blue-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-lg text-black">Portfolio</h1>

        {/* Menu */}
        <div className="flex gap-6 text-md">
          <a href="#home" className="text-black hover:text-blue-900">Home</a>
          <a href="#projects" className="text-black hover:text-blue-900">Projects</a>
          <a href="#contact" className="text-black hover:text-blue-900">Contact</a>
        </div>

      </div>
    </nav>
  );
}