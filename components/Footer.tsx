import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white/70 dark:bg-neutral-950/80 backdrop-blur border-t border-neutral-100/70 dark:border-neutral-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <a href="#top" className="flex items-center space-x-3">
          <img
            src="https://i.postimg.cc/T1b11XRH/logo_light_eigencore.png"
            alt="EigenCore"
            className="h-7 w-auto dark:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src="https://i.postimg.cc/sxWxxRVN/logo_dark_eigencore.png"
            alt="EigenCore"
            className="h-7 w-auto hidden dark:block"
            loading="lazy"
            decoding="async"
          />
          <span className="text-lg font-bold tracking-tighter">
            Eigen<span className="text-brand-600">Core</span>
          </span>
        </a>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-neutral-400 dark:text-neutral-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <a
            href="https://github.com/eigencore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/company/eigencore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/eigen.core"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/EigenCoreOrg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 transition-colors"
          >
            Facebook
          </a>
        </div>

        {/* Legal / tagline */}
        <div className="text-neutral-400 dark:text-neutral-600 text-[10px] font-bold uppercase tracking-widest text-center md:text-right">
          © {new Date().getFullYear()} EigenCore México • IA Real
        </div>
      </div>
    </footer>
  );
};

export default Footer;
