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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
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
            I'm constantly learning and expanding my skill set. Currently
            exploring new technologies in cloud computing, DevOps, and modern
            frameworks to stay at the forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
