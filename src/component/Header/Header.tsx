import header from '../../constants/header';

function Header() {
  return (
    <div
      id="header-container"
      className="bg-red-600 text-center p-8 h-40 flex flex-col justify-around"
    >
      <h1 id="header-title" className="text-red-50 text-4xl font-bold">
        {header.title}
      </h1>
      <h2 id="header-subtitle" className="text-red-50">
        {header.subtitle}
      </h2>
    </div>
  );
}

export default Header;
