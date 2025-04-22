import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _subject: "New message from your portfolio website"
                })
            });

            const data = await response.json();

            if (data.ok || response.ok) {
                setForm({ name: "", email: "", message: "" });
                setSubmitStatus({
                    success: true,
                    message: "Your message has been sent successfully! I'll respond within 24-48 hours."
                });
            } else {
                throw new Error(data.error || "Failed to send message");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus({
                success: false,
                message: "Something went wrong. Please try again or email me directly."
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white pt-24 px-4 sm:px-6 pb-16">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Contact Me
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Interested in working together or have questions? Reach out and let's connect.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    <motion.div
                        className="space-y-6 sm:space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-700 dark:text-gray-300">Email</h3>
                                        <a
                                            href="mailto:rozhak9@outlook.com"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                                        >
                                            rozhak9@outlook.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400 flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-700 dark:text-gray-300">Phone/WhatsApp</h3>
                                        <a
                                            href="tel:+6283847921480"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            +62 838 4792 1480
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400 flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-700 dark:text-gray-300">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Purbalingga, Indonesia (Open to remote work)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="font-medium mb-3 sm:mb-4">Connect on Social Media</h3>
                                <div className="flex gap-3 sm:gap-4">
                                    {[
                                        {
                                            name: "GitHub",
                                            url: "https://github.com/RozhakXD",
                                            icon: <Github className="w-5 h-5" />,
                                            color: "hover:bg-gray-200 dark:hover:bg-gray-700"
                                        },
                                        {
                                            name: "LinkedIn",
                                            url: "https://linkedin.com/in/rozhak",
                                            icon: <Linkedin className="w-5 h-5" />,
                                            color: "hover:bg-blue-100 dark:hover:bg-blue-900/50"
                                        },
                                        {
                                            name: "Twitter",
                                            url: "https://twitter.com/rozhak_official",
                                            icon: <Twitter className="w-5 h-5" />,
                                            color: "hover:bg-sky-100 dark:hover:bg-sky-900/50"
                                        }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-lg ${social.color} transition-colors`}
                                            whileHover={{ y: -3 }}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                            <span className="sr-only">{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Card */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h2>

                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg ${
                                    submitStatus.success
                                        ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200"
                                        : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200"
                                }`}
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                                    required
                                    minLength={3}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Hello, I'm interested in..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                                    required
                                    minLength={10}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className={`w-full flex items-center justify-center gap-2 px-6 py-2 sm:py-3 rounded-lg text-white font-medium ${
                                    isSubmitting
                                        ? 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
                                } transition-colors text-sm sm:text-base`}
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;