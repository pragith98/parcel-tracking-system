function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 flex flex-col py-5">
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        © Copyright {currentYear}. All Rights Reserved
      </p>
      <p className="text-xs text-gray-400 text-center">
        Developed By Pragith Thilakarathna
      </p>
    </footer>
  );
}

export default Footer;
