import header from "../../constants/header";

function Header() {
    const headerContainerStyle: React.CSSProperties = {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#df0000',
    };

    const headerTitleStyle: React.CSSProperties = {
        color: '#fff8f8',
        fontSize: '2.5rem',
    };

    const headerSubtitleStyle:  React.CSSProperties = {
        color: '#fff8f8',
        fontSize: '1.5rem',
    };

  return (
    <div className='header-container' style={headerContainerStyle}>
      <h1 className='header-title' style={headerTitleStyle}>{header.title}</h1>
      <h2 className='header-subtitle' style={headerSubtitleStyle}>{header.subtitle}</h2>
    </div>
  );
}

export default Header;