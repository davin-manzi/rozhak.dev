import { motion } from "framer-motion";
import { Code, Cpu, Database, Smartphone, Shield } from "lucide-react";

const TechStack = () => {
    const techCategories = [
        {
            name: "Backend Development",
            icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
            technologies: [
                "Python", "Flask", "Django", "FastAPI", "Node.js",
                "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"
            ]
        },
        {
            name: "Frontend Development",
            icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
            technologies: [
                "React", "TypeScript", "Tailwind CSS", "Next.js",
                "Redux", "HTML5", "CSS3", "JavaScript (ES6+)"
            ]
        },
        {
            name: "Machine Learning & AI",
            icon: <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />,
            technologies: [
                "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV",
                "NLTK", "Pandas", "NumPy", "Matplotlib"
            ]
        },
        {
            name: "DevOps & Cloud",
            icon: <Database className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
            technologies: [
                "Docker", "Kubernetes", "AWS", "Google Cloud",
                "CI/CD Pipelines", "GitHub Actions", "Jenkins"
            ]
        },
        {
            name: "Mobile Development",
            icon: <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
            technologies: [
                "Android (Java/Kotlin)", "Flutter", "React Native",
                "iOS Development", "Mobile UI/UX"
            ]
        },
        {
            name: "Cybersecurity",
            icon: <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />,
            technologies: [
                "Penetration Testing", "Ethical Hacking", "Network Security",
                "Cryptography", "OWASP Top 10", "Security Audits"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 px-6 pb-16">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        My Tech Stack
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive overview of technologies I work with
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-semibold">{category.name}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;