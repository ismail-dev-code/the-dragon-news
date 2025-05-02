import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-100 text-base-content rounded-md">
  <aside>
    <small><p>Copyright © {new Date().getFullYear()} - All rights reserved by Ismail Initiative.</p></small>
  </aside>
</footer>
    );
};

export default Footer;