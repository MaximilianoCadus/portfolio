import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Users } from "lucide-react";
import { about } from "../data/portfolioData";

const About = () => {
  const iconComponents = {
    GraduationCap,
    Code2,
    Trophy,
    Users,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden aspect-square">
                <img
                  src={about.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder if image fails to load */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500" style={{display: 'none'}}>
                  <Users size={120} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6">
            {about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </motion.p>
            ))}

            {/* Highlights Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mt-8">
              {about.highlights.map((highlight, index) => {
                const IconComponent = iconComponents[highlight.icon];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-3 mb-2">
                      {IconComponent && (
                        <IconComponent
                          className="text-blue-600 dark:text-blue-400"
                          size={24}
                        />
                      )}
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
