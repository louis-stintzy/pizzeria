import footer from '../../constants/footer';

function Footer() {
  return (
    <div
      id="footer-container"
      className="mt-auto h-24 bg-zinc-800 py-8 text-center text-red-50"
    >
      <p id="footer-content">{footer.content}</p>
    </div>
  );
}

export default Footer;
