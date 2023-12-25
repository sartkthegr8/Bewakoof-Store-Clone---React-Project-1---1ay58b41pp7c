const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo-container">
          
          <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Logo" className="h-8" />
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
