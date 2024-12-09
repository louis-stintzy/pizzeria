import footer from '../../constants/footer';

function Footer() {
  return (
    <div
      id="footer-container"
      className="text-red-50 bg-zinc-800 py-8 text-center h-24 mt-auto"
    >
      <p id="footer-content">{footer.content}</p>
    </div>
  );
}

export default Footer;
