import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    MessageCircle,
    X
} from 'lucide-react';
import useContato from '../Hook/useContato';

export function Contact() {
    const {
        modalAberto,
        setModalAberto,
        mensagemId,
        colaboradores,
        abrirModalContato,
        enviarMensagem
    } = useContato();

    return (
        <>
        <section id="contato" className="py-16 bg-[#050e1d] text-white border-t border-[#9b6b2f]/40 relative overflow-hidden">

            {/* Glow de Fundo Sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#9b6b2f]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">

                    {/* COLUNA 1: Título e Chamada (Lado Esquerdo) */}
                    <div className="lg:col-span-4 space-y-2">
                        <span className="text-[#9b6b2f] text-xs font-bold tracking-widest uppercase block">
                            VAMOS CONVERSAR?
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                            Seu próximo passo é simples: entre em contato conosco!
                        </h2>
                    </div>

                    {/* COLUNA 2: Botão WhatsApp e Texto (Centro) */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center text-left lg:text-center space-y-4 py-4 lg:py-0 border-y lg:border-y-0 lg:border-x border-slate-800/80 lg:px-6">
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xs">
                            Estamos prontos para entender suas necessidades e oferecer a melhor solução para o seu negócio.
                        </p>

                        <button
                            onClick={() => abrirModalContato(1)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition"
                        >
                            <div className="flex items-center gap-3">
                                <MessageCircle className="w-5 h-5" />

                                <span>
                                    Fale conosco
                                </span>
                            </div>

                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* COLUNA 3: Dados de Contato (Lado Direito) */}
                    <div className="lg:col-span-4 space-y-3 text-xs text-slate-300">

                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#9b6b2f] shrink-0" />
                            <span>(11) 98765-4221</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#9b6b2f] shrink-0" />
                            <span className="truncate">contato@davidveigacontabilidade.com.br</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-[#9b6b2f] shrink-0" />
                            <span>Av. Paulista, 1000 - São Paulo/SP</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-[#9b6b2f] shrink-0" />
                            <span>Seg - Sex: 08h às 18h</span>
                        </div>

                    </div>

                </div>
            </div>
            </section>
            {/* Modal */}
            {modalAberto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

                    <div className="w-full max-w-md rounded-2xl bg-[#050e1d] border border-slate-700 p-6 shadow-2xl">

                        {/* Cabeçalho */}
                        <div className="flex items-center justify-between mb-6">

                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    Fale conosco
                                </h3>

                                <p className="text-sm text-slate-400 mt-1">
                                    Com quem você deseja falar?
                                </p>
                            </div>

                            <button
                                onClick={() => setModalAberto(false)}
                                className="text-slate-400 hover:text-white transition"
                            >
                                <X className="w-5 h-5" />
                            </button>

                        </div>

                        {/* Colaboradores */}
                        <div className="space-y-3">

                            {colaboradores.map((colaborador) => (
                                <button
                                    key={colaborador.id}
                                    onClick={() =>
                                        enviarMensagem(
                                            colaborador.id,
                                            mensagemId
                                        )
                                    }
                                    className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-left"
                                >
                                    <div>
                                        <p className="font-semibold text-white">
                                            {colaborador.nome}
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            Atendimento
                                        </p>
                                    </div>

                                    <MessageCircle className="w-5 h-5 text-green-500" />
                                </button>
                            ))}

                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Contact;