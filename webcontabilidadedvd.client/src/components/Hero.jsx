import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import hero_01 from '../assets/hero_01.png';

export function Hero() {
    return (
        <section id="inicio" className="relative bg-slate-900 text-white min-h-[85vh] flex items-center overflow-hidden">

            {/* Imagem de Fundo com Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero_01}
                    alt="Escritório corporativo"
                    className="w-full h-full object-cover object-center"
                />
                {/* Camada escura com gradiente para dar contraste e legibilidade ao texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
            </div>

            {/* Conteúdo do Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
                <div className="max-w-2xl">

                    {/* Badge superior */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Mais que números, parceria para o seu crescimento
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Soluções contábeis que <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">impulsionam</span> o seu negócio.
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                        Na David Veiga Contabilidade, unimos experiência, tecnologia e atendimento personalizado para cuidar da sua empresa com segurança, eficiência e foco no que realmente importa: o seu crescimento.
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contato"
                            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
                        >
                            Fale conosco
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-medium px-6 py-3.5 rounded-lg transition-all hover:border-slate-600"
                        >
                            Conheça nossos serviços
                            <ChevronDown className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;