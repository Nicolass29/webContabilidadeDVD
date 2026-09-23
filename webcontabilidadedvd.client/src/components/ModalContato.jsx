import React from 'react';
import { X } from 'lucide-react';
import {MessageCircle, } from 'lucide-react';

// Exemplo simples de modal — se você já tiver um componente parecido
// em outra tela usando o useContato, use o seu no lugar deste.
export function ModalContato({ colaboradores, onSelecionar, onFechar }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-[#08152c] border border-[#9b6b2f]/40 rounded-2xl p-6 max-w-md w-full relative">
                <button
                    onClick={onFechar}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                <h3 className="text-white font-bold text-lg mb-4">Escolha um consultor</h3>

                <div className="space-y-2 max-h-80 overflow-y-auto">
                    {colaboradores.length === 0 && (
                        <p className="text-slate-400 text-sm">Nenhum colaborador disponível no momento.</p>
                    )}

                    {colaboradores.map((colaborador) => (
                        <button
                            key={colaborador.id}
                            onClick={() => onSelecionar(colaborador.id)}
                            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-left"
                        >
                            {colaborador.nome}
                            <MessageCircle className="w-5 h-5 text-green-500" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ModalContato;