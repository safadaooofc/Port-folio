import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import { profile } from '@/data/profile';

export function Contact() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl shadow-indigo-200"
      >
        <h2 className="text-3xl font-bold mb-4">Vamos Trabalhar Juntos</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-lg">
          Estou disponível para novos desafios profissionais e projetos B2B. Entre em contato para discutirmos como a tecnologia pode alavancar seus resultados.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={profile.links.email}
            className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            Enviar E-mail
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors border border-indigo-500 w-full sm:w-auto justify-center"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
