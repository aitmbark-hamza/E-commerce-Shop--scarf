import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">

          {/* Social Media Icons */}
          <div className="mt-20 pt-16 border-t border-border text-center">
            <h2 className="text-2xl font-bold mb-6">Follow Us</h2>

            <div className="flex justify-center gap-10 text-4xl">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
                className="text-pink-600 hover:scale-110 transition transform duration-200"
              >
                <FaInstagram />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on WhatsApp"
                className="text-green-500 hover:scale-110 transition transform duration-200"
              >
                <FaWhatsapp />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on TikTok"
                className="text-black hover:scale-110 transition transform duration-200"
              >
                <FaTiktok />
              </a>

            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Email:</span> scaefstore@gmail.com
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone:</span> +212637243877
              </p>
              <p>
                <span className="font-semibold text-foreground">Hours:</span> Monday - Friday, 9am - 6pm EST
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
