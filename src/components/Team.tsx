import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dibyajyoti Biswal',
    role: 'CEO & Founder',
    description:
      'Visionary leader driving the future of digital content in Odisha',
    image:
      'https://lh3.googleusercontent.com/pw/AP1GczOwwKlZxmL4x9ydvLf5J1ZiaGUH3ipii59fuiYCBkCxV_hW94u37aNrG0xzul3gKW7VJmg3HZ7kIBDmD19aSvxSqd4LPNcSi4ry9Hz3Mn1EsGkhgXbXjUBUF8QQxakSDjyNkjH8IH79JT7w9UMHY8c=w375-h375-s-no-gm?auto=format&fit=crop&q=80',
  },
  {
    name: 'IW TANMAYA',
    role: 'Lead Video Editor',
    description: 'Creative genius behind our stunning visual content',
    image:
      'https://lh3.googleusercontent.com/pw/AP1GczNooizuyr5lDNlibzoo3aBtAWY8o28Fx4R9V4k8tJFxP2CgHLnREDe0WLj6nXw5wg7xIpVmpOXtcI3rPbIomrsb2T2ilEQfhWm5az9hSETtvPfRVDcNU1xO1-ulybMbHFsz2oq9iAAZGwrLfme49os=w375-h375-s-no-gm?auto=format&fit=crop&q=80',
  },
];

export function Team() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <p className="text-gray-300">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
