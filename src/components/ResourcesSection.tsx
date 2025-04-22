import { motion } from "framer-motion";
import { Download, Code, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesSection = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Resources
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Download my materials and explore my technical skills
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                My Resume
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Download my latest resume in PDF format.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="/documents/resume.pdf"
                                download="YourName_Resume.pdf"
                                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                                <Code className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Tech Stack
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Technologies I regularly work with:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Python', 'Flask', 'Django', 'React', 'TypeScript', 'TensorFlow', 'Docker', 'Java', 'Linux'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                        <Link
                            to="/tech-stack"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            View full tech stack <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;