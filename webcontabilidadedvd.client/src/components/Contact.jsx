import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';

export function Contact() {
    // Ajuste o número do WhatsApp aqui (formato: 55 + DDD + número)
    const whatsappNumber = "5511932677136";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços contábeis.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
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

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105"
                        >
                            <MessageCircle className="w-4 h-4 fill-current" />
                            <span>Fale conosco agora</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
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
    );
}

export default Contact;