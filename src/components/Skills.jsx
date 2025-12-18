import { motion } from "framer-motion";
import { Layout, Server, Wrench, Heart } from "lucide-react";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const iconComponents = {
    Layout,
    Server,
    Wrench,
    Heart,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.categories.map((category, categoryIndex) => {
            const IconComponent = iconComponents[category.icon];
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  {IconComponent && (
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-purple-500 transition-colors cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm constantly learning and expanding my skill set to stay at the
            forefront of development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
