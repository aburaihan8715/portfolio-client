const Footer = () => {
  return (
    <footer className="shadow-[0px_-1px_0px_rgba(255,255,255,0.3)]">
      <div className="mx-auto w-full max-w-7xl px-2 py-5">
        <p className="text-center text-gray-300">{`Copyright © ${new Date().toLocaleDateString('de-DE')} - All right reserved by Abu Raihan`}</p>
      </div>
    </footer>
  );
};

export default Footer;
