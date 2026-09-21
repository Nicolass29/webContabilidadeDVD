import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonialsList = [
    {
        name: "Juliana Costa",
        role: "Sócia - JCM Comércio",
        text: "A David Veiga cuida da nossa empresa com muita atenção e profissionalismo. Sempre que precisamos, somos bem atendidos e orientados com clareza.",
        rating: 5,
    },
    {
        name: "Rafael Mendes",
        role: "CEO - RM Tecnologia",
        text: "Profissionais competentes, atendimento ágil e um suporte que realmente faz diferença no nosso dia a dia. Recomendo de olhos fechados!",
        rating: 5,
    },
    {
        name: "Carolina Alves",
        role: "Diretora - Alves & Silva Distribuidora",
        text: "A equipe é incrível! Sempre solícitos, organizados e transmitem muita segurança. Nosso negócio está em boas mãos desde a transição.",
        rating: 5,
    }
];

export function Testimonials() {
    return (
        <section id="depoimentos" className="py-20 bg-slate-50 text-slate-800">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">

                {/* Cabeçalho da Seção */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-[#9b6b2f] text-xs font-semibold tracking-widest uppercase mb-2 block">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-3">
                        A confiança de quem caminha com a gente é o que nos move a ir cada vez mais longe.
                    </p>
                </div>

                {/* Grid de Depoimentos */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonialsList.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
                        >
                            {/* Ícone Aspas de fundo */}
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-[#9b6b2f]/10 transition-colors pointer-events-none" />

                            <div>
                                {/* Estrelas */}
                                <div className="flex text-[#9b6b2f] gap-1 mb-4">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>

                                {/* Texto do Depoimento */}
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic relative z-10">
                                    "{item.text}"
                                </p>
                            </div>

                            {/* Autor */}
                            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#050e1d] text-[#9b6b2f] border border-[#9b6b2f]/40 flex items-center justify-center font-bold text-sm">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                                    <span className="text-xs text-slate-500 block">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;