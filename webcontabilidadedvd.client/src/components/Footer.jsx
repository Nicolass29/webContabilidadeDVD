import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#030914] text-slate-400 border-t border-[#9b6b2f]/30 relative z-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8">

                {/* Grid Principal de 4 Colunas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Coluna 1: Marca e Breve Descrição */}
                    <div className="space-y-4">
                        <img
                            src={logo}
                            alt="David Veiga Contabilidade"
                            width={1400}
                            height={340}
                            className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[280px]"
                        />
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Soluções contábeis e fiscais estratégicas para impulsionar a segurança e o crescimento do seu negócio.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#9b6b2f] pl-2">
                            Navegação
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li>
                                <a href="#inicio" className="hover:text-[#9b6b2f] transition-colors">Início</a>
                            </li>
                            <li>
                                <a href="#servicos" className="hover:text-[#9b6b2f] transition-colors">Serviços</a>
                            </li>
                            <li>
                                <a href="#sobre" className="hover:text-[#9b6b2f] transition-colors">Sobre Nós</a>
                            </li>
                            <li>
                                <a href="#diferenciais" className="hover:text-[#9b6b2f] transition-colors">Diferenciais</a>
                            </li>
                            <li>
                                <a href="#depoimentos" className="hover:text-[#9b6b2f] transition-colors">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#contato" className="hover:text-[#9b6b2f] transition-colors">Contato</a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Serviços */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#9b6b2f] pl-2">
                            Nossos Serviços
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li className="hover:text-slate-300 transition-colors">Contabilidade Geral</li>
                            <li className="hover:text-slate-300 transition-colors">Assessoria Fiscal & Tributária</li>
                            <li className="hover:text-slate-300 transition-colors">Departamento Pessoal (Folha/eSocial)</li>
                            <li className="hover:text-slate-300 transition-colors">Abertura e Regularização de Empresas</li>
                            <li className="hover:text-slate-300 transition-colors">Planejamento Tributário</li>
                        </ul>
                    </div>

                    {/* Coluna 4: Atendimento */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#9b6b2f] pl-2">
                            Atendimento
                        </h4>
                        <ul className="space-y-3 text-xs">
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-3.5 h-3.5 text-[#9b6b2f] shrink-0" />
                                <span>(11) 93267-7136</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-3.5 h-3.5 text-[#9b6b2f] shrink-0" />
                                <span className="truncate">contato@davidveigacontabilidade.com.br</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-3.5 h-3.5 text-[#9b6b2f] shrink-0 mt-0.5" />
                                <span>Av. Norte, 1000 - Pará/PA</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Linha Divisória de Direitos Autorais e Voltar ao Topo */}
                <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} David Veiga Contabilidade. Todos os direitos reservados.</p>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-[#9b6b2f] transition-colors group"
                    >
                        <span>Voltar ao topo</span>
                        <div className="w-7 h-7 rounded bg-[#050e1d] border border-slate-800 flex items-center justify-center group-hover:border-[#9b6b2f] transition-colors">
                            <ArrowUp className="w-3.5 h-3.5" />
                        </div>
                    </button>
                </div>

            </div>
        </footer>
    );
}

export default Footer;