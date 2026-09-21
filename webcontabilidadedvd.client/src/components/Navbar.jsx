import React, { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
const links = [
    { to: "#inicio", label: "Início" },
    { to: "#sobre", label: "Sobre" },
    { to: "#servicos", label: "Serviços" },
    { to: "#diferenciais", label: "Diferenciais" },
    { to: "#depoimentos", label: "Depoimentos" },
    { to: "#contato", label: "Contato" },
];

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#9b6b2f]/40 bg-[#050e1d] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a
                        href="#inicio"
                        aria-label="David Veiga Contabilidade — início"
                        className="flex shrink-0 items-center"
                    >
                        <img
                            src={logo}
                            alt="David Veiga Contabilidade"
                            width={1400}
                            height={340}
                            className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[280px]"
                        />
                    </a>

                    {/* Links Desktops */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.to}
                                href={link.to}
                                className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Botão Área do Cliente */}

                    <div className="hidden md:flex items-center">
                        <a
                            href="#area-cliente"
                            className="flex items-center gap-2 border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white text-sm px-4 py-2 rounded-md transition-all"
                        >
                            <User className="w-4 h-4 text-amber-500" />
                            <span>Área do Cliente</span>
                        </a>
                    </div>

                    {/* Botão Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden space-y-3 border-b border-[#9b6b2f]/40 bg-[#050e1d] px-4 pt-2 pb-6">

                    {links.map((link) => (
                        <a
                            key={link.to}
                            href={link.to}
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium text-slate-300 hover:text-amber-500 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#area-cliente"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 rounded-md border border-[#9b6b2f]/50 bg-[#0b192d] px-4 py-2 text-sm text-white transition-colors hover:border-amber-500/70 hover:bg-[#10223b]"
                    >
                        <User className="p-2 text-slate-300 transition-colors hover:text-amber-500"
 />
                        <span>Área do Cliente</span>
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;