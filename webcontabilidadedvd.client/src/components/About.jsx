import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

// 1. Descomenta a linha abaixo quando colocares a tua imagem na pasta assets:
// import officeImg from '../assets/images/about-office.jpg';

export function About() {
    return (
        <section id="sobre" className="py-24 bg-white text-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Contentor da Imagem com Overlays */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">

                            {/* Imagem Principal */}
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                                alt="Escritório David Veiga Contabilidade"
                                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Degradê escuro inferior para leitura dos elementos sobrepostos */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                            {/* Logo / Emblema no canto superior esquerdo */}
                            <div className="absolute top-6 left-6 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800 shadow-lg">
                                <img
                                    src={logo}
                                    alt="David Veiga Contabilidade"
                                    width={1400}
                                    height={340}
                                    className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[280px]"
                                />
                            </div>

                            {/* Tag de Confiança no canto inferior esquerdo */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-700/80 text-xs text-slate-200 shadow-xl">
                                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                                    <span className="font-medium">Tradição e confiança em cada atendimento</span>
                                </div>
                            </div>

                        </div>

                        {/* Moldura decorativa de fundo */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-500/30 rounded-3xl -z-10 hidden sm:block" />
                    </div>

                    {/* Conteúdo Textual */}
                    <div>
                        <span className="text-amber-600 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                            Sobre Nós
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                            Comprometimento, experiência e proximidade com o seu negócio.
                        </h2>

                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                            A **David Veiga Contabilidade** nasceu com o propósito de oferecer mais do que serviços contábeis burocráticos. Nosso foco é construir parcerias sólidas e de longo prazo, auxiliando empresas a prosperarem em um ambiente tributário complexo.
                        </p>

                        <p className="text-slate-600 text-base leading-relaxed mb-8">
                            Unimos tecnologia de ponta para agilizar processos no dia a dia com um atendimento humano, transparente e sempre próximo de você.
                        </p>

                        {/* Estatísticas */}
                        <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-100">
                            <div>
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block mb-1">+10</span>
                                <span className="text-xs sm:text-sm text-slate-500 font-medium">Anos de experiência</span>
                            </div>
                            <div>
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block mb-1">+150</span>
                                <span className="text-xs sm:text-sm text-slate-500 font-medium">Empresas atendidas</span>
                            </div>
                            <div>
                                <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 block mb-1">100%</span>
                                <span className="text-xs sm:text-sm text-slate-500 font-medium">Foco em resultados</span>
                            </div>
                        </div>

                        <a
                            href="#contato"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-lg transition-colors text-sm"
                        >
                            Conheça nossa trajetória
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;