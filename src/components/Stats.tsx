import { Users, Video, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, count: '100K+', label: 'Subscribers' },
  { icon: Video, count: '500+', label: 'Videos Created' },
  { icon: Award, count: '50+', label: 'Awards Won' },
];

export function Stats() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-6 rounded-lg bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-orange-500" />
              <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}