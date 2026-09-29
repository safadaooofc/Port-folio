import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export function About() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Sobre Mim</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div>
            <div className="glass-card p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-6">Métricas & Atuação</h3>
              <div className="space-y-6">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-slate-100 pb-2">
                    <span className="text-slate-500 text-sm">{stat.label}</span>
                    <span className="font-semibold text-indigo-600 text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
