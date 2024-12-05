import footer from "../../constants/footer";

function Footer() {
  const footerContainerStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    textAlign: 'center',
    borderTop: '1px solid #e9ecef',
  };
  const footerContentStyle : React.CSSProperties = {
    
  }
  return (
    <div className="footer-container" style={footerContainerStyle}>
      <p className="footer-content" style={footerContentStyle}>{footer.content}</p>
    </div>
  );
}

export default Footer;