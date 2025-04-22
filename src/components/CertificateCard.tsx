import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
    tags: string[];
};

const CertificateCard = ({ title, issuer, date, image, link, tags }: Props) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-100 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">View Credential</span>
                    </a>
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{issuer}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{formattedDate}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CertificateCard;