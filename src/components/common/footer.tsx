const Footer = () => {
  return (
    <footer className="shadow-[0px_-1px_1px_rgba(255,255,255,0.3)]">
      <div className="w-full max-w-7xl mx-auto py-5 px-2">
        <p className="text-center text-gray-300">{`Copyright © ${new Date().toLocaleDateString("de-DE")} - All right reserved by Abu Raihan`}</p>
      </div>
    </footer>
  );
};

export default Footer;
