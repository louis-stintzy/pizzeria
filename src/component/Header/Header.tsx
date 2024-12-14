import header from '../../constants/header';

function Header() {
  return (
    <div
      id="header-container"
      className="flex h-40 flex-col justify-around bg-red-600 p-8 text-center"
    >
      <h1 id="header-title" className="text-4xl font-bold text-red-50">
        {header.title}
      </h1>
      <h2 id="header-subtitle" className="text-red-50">
        {header.subtitle}
      </h2>
    </div>
  );
}

export default Header;
