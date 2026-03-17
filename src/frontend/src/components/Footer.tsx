import { Globe, MapPin, Phone, Stethoscope } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-clinic py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-lg text-white leading-none block">
                  Agrawal Clinic
                </span>
                <span className="text-xs text-white/50">Dr. Amit Agrawal</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your trusted healthcare partner in Noida. Comprehensive medical
              care with compassion and expertise.
            </p>
            <p className="text-white/40 text-xs mt-4">
              Serving Noida and nearby areas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Reviews", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      data-ocid={`footer.${link.toLowerCase()}.link`}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:08527312555"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                  data-ocid="footer.phone.link"
                >
                  085273 12555
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Sector 78, Noida, UP 201305
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <a
                  href="https://ekacare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                  data-ocid="footer.appointments.link"
                >
                  ekacare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Agrawal Clinic · Dr. Amit Agrawal. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/50 text-xs transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
