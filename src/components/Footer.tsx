import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Instagram, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
}

interface Resource {
    name: string;
    url: string;
    icon: React.ReactNode;
    isExternal?: boolean;
}

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        {
            name: "GitHub",
            url: "https://github.com/RozhakXD",
            icon: <Github className="w-5 h-5" />,
            color: "hover:text-gray-700 dark:hover:text-gray-300"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/rozhak",
            icon: <Linkedin className="w-5 h-5" />,
            color: "hover:text-blue-600 dark:hover:text-blue-400"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/rozhak_official",
            icon: <Twitter className="w-5 h-5" />,
            color: "hover:text-sky-500 dark:hover:text-sky-400"
        },
        {
            name: "Email",
            url: "mailto:rozhak9@outlook.com",
            icon: <Mail className="w-5 h-5" />,
            color: "hover:text-red-500 dark:hover:text-red-400"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/rozhak_offcial",
            icon: <Instagram className="w-5 h-5" />,
            color: "hover:text-pink-600 dark:hover:text-pink-400"
        }
    ];

    const resources: Resource[] = [
        {
            name: "Download CV",
            url: "/documents/CV_Rozhak.pdf",
            icon: <FileText className="w-4 h-4 mr-2" />,
            isExternal: true
        },
        {
            name: "Tech Stack",
            url: "/tech-stack",
            icon: (
                <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <motion.div
                        className="md:col-span-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/"
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                            Rozhak
                        </Link>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Building digital solutions with a focus on performance, security, and user experience.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-500 dark:text-gray-400 transition-colors ${social.color}`}
                                    whileHover={{ y: -2 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:col-span-3 md:col-start-7"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {item.isExternal ? (
                                        <a
                                            href={item.url}
                                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download={item.name.includes('CV')}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.url}
                                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="md:col-span-4 md:col-start-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                        <address className="not-italic text-gray-600 dark:text-gray-400 space-y-3">
                            <motion.p
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                📍 Purbalingga, Indonesia
                            </motion.p>
                            <motion.a
                                href="mailto:rozhak9@outlook.com"
                                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                ✉️ rozhak9@outlook.com
                            </motion.a>
                            <motion.a
                                href="tel:+6283847921480"
                                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                📞 +62 838 4792 1480
                            </motion.a>
                        </address>
                    </motion.div>
                </div>

                <motion.div
                    className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        &copy; {currentYear} Rozhak. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link
                            to="/privacy"
                            className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;