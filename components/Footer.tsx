import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const linkClassName =
    "text-gray-400 font-semibold hover:underline hover:text-purple-300";
  return (
    <footer className="bg-black text-gray-500 p-6 mt-4 mb-8">
      <div className="grid grid-cols-1 gap-6 text-center">
        <div className="my-links">
          <ul className="list-none p-0 m-0">
            <li className="inline mr-4">
              <a
                href="https://github.com/erictehyc"
                className={linkClassName}
                target="_blank"
              >
                <FaGithub className="inline text-2xl" aria-label="GitHub" />
              </a>
            </li>
            <li className="inline mr-4">
              <a
                href="https://www.linkedin.com/in/yichang-teh/"
                className={linkClassName}
                target="_blank"
              >
                <FaLinkedin className="inline text-2xl" aria-label="LinkedIn" />
              </a>
            </li>
            <li className="inline">
              <a
                href="https://www.instagram.com/eric_tehyc/"
                className={linkClassName}
                target="_blank"
              >
                <FaInstagram
                  className="inline text-2xl"
                  aria-label="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Yi Chang (Eric). All rights
            reserved.
          </p>
          <p className="text-sm">
            Built with&nbsp;
            <a
              href="https://nextjs.org"
              className={linkClassName}
              target="_blank"
            >
              Next.js
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://tailwindcss.com"
              className={linkClassName}
              target="_blank"
            >
              Tailwind CSS
            </a> with components from&nbsp;
            <a
              href="https://ui.aceternity.com"
              className={linkClassName}
              target="_blank"
            >
              Aceternity UI
            </a>
          </p>
          <p className="text-sm">
            Deployed on&nbsp;
            <a
              href="https://vercel.com"
              className={linkClassName}
              target="_blank"
            >
              Vercel
            </a>, with email services powered by&nbsp;
            <a
              href="https://resend.com"
              className={linkClassName}
              target="_blank"
            >
              Resend
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
