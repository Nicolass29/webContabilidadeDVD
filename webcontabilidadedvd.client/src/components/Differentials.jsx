import React from 'react';
import { UserCheck, Zap, ShieldCheck, Eye } from 'lucide-react';

const differentialsList = [
    {
        icon: UserCheck,
        title: "Atendimento Personalizado",
        desc: "Sem respostas genéricas. Soluções desenhadas para a realidade do seu negócio."
    },
    {
        icon: Zap,
        title: "Tecnologia & Agilidade",
        desc: "Processos digitais simples para você enviar documentos e consultar relatórios rápido."
    },
    {
        icon: ShieldCheck,
        title: "Equipe Especializada",
        desc: "Profissionais qualificados e atualizados com a legislação tributária."
    },
    {
        icon: Eye,
        title: "Transparência Total",
        desc: "Comunicação clara, sem surpresas nas contas ou nas obrigações."
    }
];

export function Differentials() {
    return (
        <section id="diferenciais" className="py-20 bg-[#050e1d] text-white relative overflow-hidden border-t border-[#9b6b2f]/40">

            {/* Luz ambiente de fundo (Glow Dourado) */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#9b6b2f]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

                {/* Grid Principal dividindo Lado Esquerdo e Lado Direito */}
                <div className="grid lg:grid-cols-12 gap-10 items-center">

                    {/* LADO ESQUERDO: Título e Chamada (Ocupa 5 colunas em telas grandes) */}
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-[#9b6b2f] text-xs font-semibold tracking-widest uppercase block">
                            Nossos Diferenciais
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                            Por que escolher a David Veiga Contabilidade?
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                            Aqui, você encontra mais do que um escritório contábil: um parceiro que simplifica a burocracia para você focar no crescimento da sua empresa.
                        </p>
                    </div>

                    {/* LADO DIREITO: Cards em Grade 2x2 (Ocupa 7 colunas em telas grandes) */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                        {differentialsList.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#08152c]/90 p-5 rounded-xl border border-[#9b6b2f]/30 hover:border-[#9b6b2f] transition-all duration-300 hover:-translate-y-1 shadow-md group"
                            >
                                {/* Ícone */}
                                <div className="w-10 h-10 rounded-lg bg-[#050e1d] border border-[#9b6b2f]/40 flex items-center justify-center text-[#9b6b2f] mb-4 group-hover:bg-[#9b6b2f] group-hover:text-[#050e1d] transition-colors duration-300">
                                    <item.icon className="w-5 h-5" />
                                </div>

                                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#9b6b2f] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-300 text-xs leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Differentials;