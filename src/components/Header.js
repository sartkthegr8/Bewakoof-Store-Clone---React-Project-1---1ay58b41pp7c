const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo-container">
          {/* Assuming you want to display an image in your logo */}
          <img src="your-logo-src" alt="Logo" className="h-8" />
        </div>

        <div className="nav-items">
          <ul className="flex space-x-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
