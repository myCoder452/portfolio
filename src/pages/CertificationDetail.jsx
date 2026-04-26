
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import resumeData from '../assets/resume';
import { useEffect } from 'react';

const CertificationDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const certification = resumeData.certifications.find(c => c.slug === slug);

    useEffect(() => {
        if (!certification) {
            navigate('/certifications');
        }
    }, [certification, navigate]);

    if (!certification) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-5xl mx-auto">
                <motion.button
                    onClick={() => navigate('/certifications')}
                    className="mb-8 px-4 py-2 bg-secondary text-primary rounded-full font-bold hover:bg-highlight hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ← Back to Certifications
                </motion.button>

                <div className="bg-secondary bg-opacity-90 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
                    <div className="md:flex">
                        {/* Image Section */}
                        <div className="md:w-2/5 relative h-64 md:h-auto">
                            <img
                                src={certification.image}
                                alt={certification.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-highlight text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                                        {certification.issuer}
                                    </span>
                                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-sm ml-2">
                                        {certification.date}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                                    {certification.title}
                                </h1>

                                <div className="w-20 h-1 bg-highlight mb-8" />

                                <div className="text-gray-200 text-lg leading-relaxed space-y-4">
                                    {/* Using detailedDescription if available, fallback to description */}
                                    <p>{certification.detailedDescription || certification.description}</p>
                                </div>


                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CertificationDetail;
