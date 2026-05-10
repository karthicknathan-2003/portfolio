import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constant";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Wrapped in useCallback to memoize and avoid unnecessary re-renders of child components.
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame to throttle scroll events and reduce layout thrashing.
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    // Passive listener improves scroll performance by telling the browser the handler won't call preventDefault.
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup listener on unmount to prevent memory leaks.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoized scroll handler to avoid re-creating the function on each render.
  const scrollToSection = useCallback((href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Close the mobile menu after navigation.
      setIsMobileMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    // Conditionally apply "scrolled" class to trigger CSS transitions (e.g. background blur).
    <nav className={`custom-navbar fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — uses a button with role for better accessibility and SPA compatibility. */}
          <button
            onClick={() => scrollToSection("#home")}
            className="navbar-brand text-gradient bg-transparent border-none cursor-pointer"
            aria-label="Go to home section">
            Portfolio
          </button>

          {/* Desktop navigation — hidden on small screens. */}
          <div className="hidden md:flex space-x-8" role="navigation" aria-label="Desktop navigation">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={label}
                // Removed duplicate "nav-link" class and simplified to a single clean class chain.
                className="nav-link"
                onClick={() => scrollToSection(href)}>
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle button — visible only on small screens. */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              // Provide a descriptive label for screen readers.
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              className="text-white p-1"
            >
              {/* Swap icons based on menu state. */}
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu — conditionally rendered when toggled open. */}
      {isMobileMenuOpen && (
        // Fixed: replaced "bg-transparent" (which made the menu invisible) with a solid background.
        <div id="mobile-menu" className="custom-navbar bg-opacity-95 md:hidden" role="navigation" aria-label="Mobile navigation">
          <div className="flex flex-col items-center space-y-4 py-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={label}
                className="nav-link"
                onClick={() => scrollToSection(href)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};