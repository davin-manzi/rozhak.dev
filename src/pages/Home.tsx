import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors duration-300">
            <section className="flex flex-col items-center justify-center text-center py-32 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative w-40 h-40 mb-8 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md animate-pulse"></div>
                        <img
                            src="/images/profile.jpg"
                            alt="Profile"
                            className="relative w-full h-full rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
                        />
                    </div>

                    <motion.h1
                        className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Hi, I'm Rozhak
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Crafting robust backend solutions & intelligent systems with Python | ML Engineer | Security-focused Developer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <Link to="/about">
                            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg">
                                Explore My Work →
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {[
                        {
                            title: "Backend Development",
                            description: "Python, Flask, Django, FastAPI",
                            icon: "💻"
                        },
                        {
                            title: "Machine Learning",
                            description: "TensorFlow, PyTorch, Scikit-learn",
                            icon: "🧠"
                        },
                        {
                            title: "Cybersecurity",
                            description: "Penetration Testing, Secure Coding",
                            icon: "🔒"
                        },
                        {
                            title: "Mobile Development",
                            description: "Android, Java/Kotlin, Flutter",
                            icon: "📱"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Home;