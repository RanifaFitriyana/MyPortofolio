export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue backdrop-blur border-b border-blue-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-lg">MyPortfolio</h1>

        {/* Menu */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="text-blue hover:text-white">Home</a>
          <a href="#projects" className="text-blue hover:text-white">Projects</a>
          <a href="#contact" className="text-blue hover:text-white">Contact</a>
        </div>

      </div>
    </nav>
  );
}