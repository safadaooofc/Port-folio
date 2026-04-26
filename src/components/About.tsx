import { motion } from 'framer-motion';
import { Code2, Rocket, GraduationCap, Coffee } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projetos', value: '20+' },
  { icon: Rocket, label: 'Tecnologias', value: '15+' },
  { icon: GraduationCap, label: 'Certificados', value: '7+' },
  { icon: Coffee, label: 'Cafés', value: '∞' },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">&lt;sobre /&gt;</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-dark-500/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-dark-800/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-5xl font-bold text-white">
                      K
                    </div>
                    <p className="font-mono text-primary text-sm">kiover</p>
                  </div>
                </div>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 animate-float flex items-center justify-center">
                <Code2 className="text-primary" size={28} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 animate-float flex items-center justify-center" style={{ animationDelay: '3s' }}>
                <Rocket className="text-accent" size={24} />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              Kiover, para os intimos safadaoooofc
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Trabalho com desenvolvimento focado em Roblox, criando experiencias envolventes e sistemas
                completos para jogos e comunidades.
              </p>
              <p>
                Tenho experiencia em mapas de Tycoon, EB e RP, com foco em performance, jogabilidade
                e progressao de jogador. Tambem atuo com scripting e automacoes para tornar cada projeto
                mais dinamico e escalavel.
              </p>
              <p>
                Alem disso, trabalho com conexoes de API para integrar servicos externos e recursos
                personalizados, sempre buscando entregar algo solido, divertido e bem estruturado.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-dark-800/50 border border-dark-600/30"
                >
                  <Icon className="text-primary mx-auto mb-2" size={22} />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
