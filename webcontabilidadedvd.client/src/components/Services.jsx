import React from 'react';
import {
    FileText,
    Percent,
    Users,
    TrendingUp,
    Building2,
    Calculator,
    ArrowRight
} from 'lucide-react';

const servicesList = [
    {
        icon: FileText,
        title: "Contabilidade Geral",
        desc: "Organização e controle financeiro para decisões mais seguras e conformidade com as normas vigentes."
    },
    {
        icon: Percent,
        title: "Assessoria Fiscal",
        desc: "Apuração rigorosa de impostos, emissão de guias e orientação fiscal para manter sua empresa em dia."
    },
    {
        icon: Users,
        title: "Departamento Pessoal",
        desc: "Gestão completa da sua equipe: folha de pagamento, eSocial, férias, admissões e rescisões."
    },
    {
        icon: TrendingUp,
        title: "Consultoria Contábil",
        desc: "Orientação estratégica baseada em relatórios e indicadores para acelerar o crescimento sustentável."
    },
    {
        icon: Building2,
        title: "Abertura e Regularização",
        desc: "Suporte completo para abrir sua empresa, alterar cadastro (CNPJ) ou regularizar pendências."
    },
    {
        icon: Calculator,
        title: "Planejamento Tributário",
        desc: "Análise detalhada do seu regime tributário (Simples, Lucro Presumido/Real) para reduzir custos legalmente."
    }
];

export function Services() {
    return (
        <section id="servicos" className="py-24 bg-slate-50 text-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Cabeçalho da Seção */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-amber-600 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                            Nossos Serviços
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                            Cuidado completo para a gestão do seu negócio
                        </h2>
                    </div>
                    <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
                        Conte com um time especializado para cuidar da sua contabilidade, fiscal, pessoal e muito mais. Oferecemos serviços personalizados para empresas de todos os portes.
                    </p>
                </div>

                {/* Grid de Cards dos Serviços */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                {/* Ícone */}
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>

                                {/* Título e Descrição */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Botão / Link */}
                           {/*  <a
                                href="#contato"
                                className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors mt-auto pt-4 border-t border-slate-100"
                            >
                                <span>Saiba mais</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;