import { motion } from "framer-motion";
import { Code, Cpu, Shield, Smartphone } from "lucide-react";
import ResourcesSection from "../components/ResourcesSection";

const About = () => {
    const focusAreas = [
        {
            title: "Backend Development",
            description: "Python, Flask, Django, FastAPI",
            icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        },
        {
            title: "Machine Learning",
            description: "TensorFlow, PyTorch, Scikit-learn",
            icon: <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        },
        {
            title: "Cybersecurity",
            description: "Penetration Testing, Secure Coding",
            icon: <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
        },
        {
            title: "Mobile Development",
            description: "Android, Java/Kotlin, Flutter",
            icon: <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
        }
    ];

    const technologies = [
        { name: "Python", category: "language" },
        { name: "Flask", category: "framework" },
        { name: "Django", category: "framework" },
        { name: "FastAPI", category: "framework" },
        { name: "TensorFlow", category: "ml" },
        { name: "PyTorch", category: "ml" },
        { name: "Scikit-learn", category: "ml" },
        { name: "Java", category: "language" },
        { name: "Kotlin", category: "language" },
        { name: "Docker", category: "devops" },
        { name: "Git", category: "devops" },
        { name: "Linux", category: "os" },
        { name: "SQL", category: "database" },
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "language" }
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "language":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200";
            case "framework":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200";
            case "ml":
                return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200";
            case "devops":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200";
            case "frontend":
                return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        About Me
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            I'm a passionate developer specializing in <strong className="text-blue-600 dark:text-blue-400">Backend Development</strong> with Python,
                            with strong interests in <strong className="text-purple-600 dark:text-purple-400">Machine Learning</strong> and
                            <strong className="text-green-600 dark:text-green-400"> Cybersecurity</strong>.
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            I enjoy exploring new technologies and building projects that solve real-world problems,
                            whether through automation, data analysis, or secure system design.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">My Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 mr-4">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{area.title}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Technologies I Work With</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(tech.category)}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {tech.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
                    <div className="space-y-8">
                        {[
                            {
                                title: "Backend Developer",
                                company: "Tech Company",
                                period: "2022 - Present",
                                description: "Developing scalable backend systems with Python and Flask."
                            },
                            {
                                title: "Machine Learning Intern",
                                company: "AI Research Lab",
                                period: "2021 - 2022",
                                description: "Worked on computer vision projects using TensorFlow."
                            },
                            {
                                title: "Computer Science Degree",
                                company: "University of Technology",
                                period: "2018 - 2022",
                                description: "Specialized in Software Engineering and Cybersecurity."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-2 top-1"></div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="bg-white dark:bg-gray-900 pt-16 pb-20">
                <ResourcesSection />
            </div>
        </div>
    );
};

export default About;