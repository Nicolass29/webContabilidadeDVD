import React, { useEffect, useState } from 'react';
import { Check, X, Loader2, ArrowRight, ShieldCheck, MessageCircle, } from 'lucide-react';
import { Listar } from '../Service/endpoints';
import useContato from '../Hook/useContato'; // ajuste o caminho conforme seu projeto
import ModalContato from './ModalContato'; // ajuste o caminho conforme seu projeto

// Mapeamento fixo: id do plano (o que vem em `plano.id`) -> id da mensagem
// já cadastrada na sua tabela de mensagens. Ajuste os valores abaixo
// para os ids reais das mensagens de cada plano.
const MENSAGEM_ID_POR_PLANO = {
    1: 4, // Básico -> troque pelo id real da mensagem do plano Básico
    2: 5, // Profissional/intermediário -> troque pelo id real
    3: 6, // Premium/top -> troque pelo id real
};

export function Plans() {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [periodicidade, setPeriodicidade] = useState('Mensal'); // 'Mensal' ou 'Anual'

    const {
        modalAberto,
        setModalAberto,
        mensagemId,
        colaboradores,
        abrirModalContato,
        enviarMensagem
    } = useContato();

    useEffect(() => {
        carregarPlanos();
    }, []);

    const carregarPlanos = async () => {
        try {
            setLoading(true);
            const response = await Listar();

            const dados = Array.isArray(response.data)
                ? response.data
                : response.data?.$values || [];

            setPlans(dados);
        } catch (error) {
            console.error('Erro ao carregar planos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleContratar = (plano) => {
        const idDaMensagem = MENSAGEM_ID_POR_PLANO[plano.id];

        if (!idDaMensagem) {
            console.warn('Plano sem mensagemId mapeado em MENSAGEM_ID_POR_PLANO:', plano);
            return;
        }

        // Busca o objeto de preço correspondente à periodicidade atual do estado (Mensal ou Anual)
        const precoObj = plano.precos?.find(
            p => p.periodicidade.toLowerCase() === periodicidade.toLowerCase()
        ) || plano.precos?.[0];

           abrirModalContato({
            mensagemId: idDaMensagem,
            plano: plano.nome,
            periodicidade: periodicidade,
            valor: precoObj?.valor || null
        });
    };

    if (loading) {
        return (
            <section className="py-20 bg-[#050e1d] flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-[#9b6b2f] animate-spin" />
            </section>
        );
    }

    return (
        <>
            <section id="planos" className="py-20 bg-[#050e1d] text-white border-t border-[#9b6b2f]/40 relative overflow-hidden">

                {/* Glow de Fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9b6b2f]/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

                    {/* Cabeçalho */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[#9b6b2f] text-xs font-bold tracking-widest uppercase block mb-2">
                            PLANOS DISPONÍVEIS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                            Escolha a solução ideal para seu negócio
                        </h2>

                        {/* Toggle Mensal / Anual */}
                        <div className="flex items-center justify-center gap-3 mt-6">
                            <span className={`text-xs font-semibold ${periodicidade === 'Mensal' ? 'text-white' : 'text-slate-400'}`}>
                                MENSAL
                            </span>
                            <button
                                onClick={() => setPeriodicidade(p => p === 'Mensal' ? 'Anual' : 'Mensal')}
                                className="w-12 h-6 bg-[#08152c] border border-[#9b6b2f]/40 rounded-full p-1 relative transition-colors cursor-pointer"
                            >
                                <div className={`w-4 h-4 bg-[#9b6b2f] rounded-full transition-transform ${periodicidade === 'Anual' ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                            <span className={`text-xs font-semibold ${periodicidade === 'Anual' ? 'text-white' : 'text-slate-400'}`}>
                                ANUAL <span className="text-emerald-400 text-[10px] ml-1">(Economia)</span>
                            </span>
                        </div>
                    </div>

                    {/* Grid dos 3 Cards de Planos */}
                    <div className="grid md:grid-cols-3 gap-6 items-stretch">
                        {plans.map((plano) => {
                            // Busca o objeto de preço correspondente à periodicidade selecionada
                            const precoObj = plano.precos?.find(
                                p => p.periodicidade.toLowerCase() === periodicidade.toLowerCase()
                            ) || plano.precos?.[0];

                            return (
                                <div
                                    key={plano.id}
                                    className={`bg-[#08152c]/90 rounded-2xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${plano.destaque
                                        ? 'border-[#9b6b2f] shadow-xl shadow-[#9b6b2f]/10 md:-translate-y-2'
                                        : 'border-[#9b6b2f]/30 hover:border-[#9b6b2f]/70'
                                        }`}
                                >
                                    {plano.destaque && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#9b6b2f] text-[#050e1d] font-bold text-[10px] uppercase px-3 py-0.5 rounded-full tracking-wider">
                                            Mais Recomendado
                                        </span>
                                    )}

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{plano.nome}</h3>
                                        <p className="text-slate-400 text-xs mb-6 min-h-[32px]">{plano.descricao}</p>

                                        {/* Valor do Plano */}
                                        <div className="mb-6">
                                            {precoObj?.valorOriginal && (
                                                <span className="text-slate-500 text-xs line-through block">
                                                    R$ {precoObj.valorOriginal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                                </span>
                                            )}
                                            <span className="text-slate-400 text-xs">R$</span>
                                            <span className="text-3xl sm:text-4xl font-extrabold text-white mx-1">
                                                {precoObj?.valor?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                            <span className="text-slate-400 text-xs">
                                                /{periodicidade.toLowerCase() === 'anual' ? 'mês (no plano anual)' : 'mês'}
                                            </span>
                                        </div>

                                        {/* Lista de Recursos/Features */}
                                        <div className="space-y-2.5 mb-8 text-xs">
                                            {plano.features?.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    {feat.incluido ? (
                                                        <Check className="w-4 h-4 text-[#9b6b2f] shrink-0" />
                                                    ) : (
                                                        <X className="w-4 h-4 text-slate-600 shrink-0" />
                                                    )}
                                                    <span className={feat.incluido ? 'text-slate-300' : 'text-slate-500 line-through'}>
                                                        {feat.descricao}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Botão de Ação: agora abre o modal de colaborador via useContato */}
                                    <div>
                                        <button
                                            onClick={() => handleContratar(plano)}
                                            className={`w-full py-3.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${plano.destaque
                                                ? 'bg-[#9b6b2f] hover:bg-[#b07d3a] text-[#050e1d] shadow-lg shadow-[#9b6b2f]/20'
                                                : 'bg-slate-800 hover:bg-slate-700 text-white'
                                                }`}
                                        >
                                            <span>Falar com Consultor</span>
                                           
                                            <ArrowRight className="w-4 h-4" />
                                        </button>

                                        <p className="text-[10px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
                                            <ShieldCheck className="w-3 h-3 text-[#9b6b2f]" /> Sem fidelidade obrigatória
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Modal de seleção de colaborador, controlado pelo useContato */}
            {modalAberto && (
                <ModalContato
                    colaboradores={colaboradores}
                    onSelecionar={(colaboradorId) => {
                        enviarMensagem(colaboradorId, mensagemId);
                        setModalAberto(false);
                    }}
                    onFechar={() => setModalAberto(false)}
                />
            )}
        </>
    );
}

export default Plans;