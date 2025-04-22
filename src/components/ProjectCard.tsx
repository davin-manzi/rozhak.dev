import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type ProjectProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags?: string[];
};

const ProjectCard = ({ title, description, image, link, tags = [] }: ProjectProps) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col min-h-[450px]"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="View project"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="GitHub repository"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>

                {tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
