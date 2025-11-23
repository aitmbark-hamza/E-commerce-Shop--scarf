import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-script text-2xl font-bold text-foreground">
              Scarf Store
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Curated fashion and lifestyle products.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow us on Instagram"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Contact us on WhatsApp"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow us on TikTok"
                className="hover:text-black transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
         <p className="text-sm text-center">
  © {new Date().getFullYear()}.{' '}
  <a
    href="https://github.com/aitmbark-hamza"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:underline"
  >
    Made by Hamza Ait Mbark
  </a>. 
  <span className="text-muted-foreground">All rights reserved.</span>
</p>

        </div>
      </div>
    </footer>
  );
};