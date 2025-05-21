import user_info from "../../data/user_info.js";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-orange-500 to-orange-600 dark:from-zinc-900 dark:to-zinc-800">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-7xl mx-auto">
        <div className="flex-1 relative order-2 lg:order-1">
          <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse" />
          <img
            src="/contact.png"
            alt="Contact Illustration"
            className="w-60 h-auto relative z-10 mx-auto lg:mx-0"
          />
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Let&apos;s Get in Touch:{" "}
            <span className="text-zinc-900 dark:text-orange-500">
              Ways to Connect with Me
            </span>
          </h4>

          <p className="mt-4 sm:mt-8 leading-7 text-sm sm:text-base text-white">
            {user_info.contact.description}
          </p>

          <hr className="my-6 border-white/20" />

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {[
              { icon: <FaFacebook />, link: user_info.socials.facebook },
              { icon: <FaInstagram />, link: user_info.socials.instagram },
              { icon: <FaLinkedin />, link: user_info.socials.linkedin },
              { icon: <MdEmail />, href: `mailto:${user_info.main.email}` },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;