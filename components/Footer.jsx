const Footer = () => {
  return (
    <footer className="w-full mt-24 py-8 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
          {/* Left Column - Address */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-4">Akash Devmare</h3>
            <p className="hover:text-white transition-colors">Pandharpur</p>
            <p className="hover:text-white transition-colors">Maharashtra, India</p>
            <p className="hover:text-white transition-colors">413248</p>
          </div>

          {/* Middle Column - Built With */}
          <div className="md:text-center flex flex-col items-center">
            <div className="mb-4">
              <span className="text-white text-lg font-medium">
                Built with
                <span className="text-blue-500 mx-1">▼</span>
                in
              </span>
            </div>
            <div className="bg-gray-900 px-4 py-2 rounded-lg">
              <span className="text-white font-mono">Next.js</span>
            </div>
          </div>

          {/* Right Column - Legal */}
          <div className="md:text-right space-y-2">
            <p className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </p>
            <p className="text-gray-500">
              © 2025 Akash Devmare
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mt-8 md:hidden text-center space-y-4">
          <div className="text-white font-semibold">Akash Devmare</div>
          <div className="text-gray-400 space-y-2">
            <p>Pandharpur</p>
            <p>Maharashtra, India</p>
            <p>413248</p>
          </div>
          <div className="pt-4 border-t border-gray-800">
            <p className="text-blue-500">Built with ▼ in Next.js</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400">Terms & Conditions</p>
              <p className="text-gray-500">© 2025 Akash Devmare</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;