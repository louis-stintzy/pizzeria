import footer from '../../constants/footer';

function Footer() {
  const footerContainerStyle: React.CSSProperties = {
    color: '#fff',
    backgroundColor: '#333',
    padding: '20px 0',
    textAlign: 'center',
    borderTop: '1px solid #e9ecef',
  };
  const footerContentStyle: React.CSSProperties = {};
  return (
    <div className="footer-container" style={footerContainerStyle}>
      <p className="footer-content" style={footerContentStyle}>
        {footer.content}
      </p>
    </div>
  );
}

export default Footer;
