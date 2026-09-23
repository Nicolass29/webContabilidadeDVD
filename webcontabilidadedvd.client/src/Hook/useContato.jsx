import { useState } from "react";
import { obterContato, obterColaboradores } from '../Service/endpoints';

function useContato() {
    const [modalAberto, setModalAberto] = useState(false);
    const [dadosMensagem, setDadosMensagem] = useState({
        mensagemId: null,
        plano: null,
        periodicidade: null,
        valor: null
    });
    const [colaboradores, setColaboradores] = useState([]);

    async function abrirModalContato(dados) {
        const dadosNormalizados = typeof dados === "object" && dados !== null
            ? dados
            : { mensagemId: dados, plano: null, periodicidade: null, valor: null };

        setDadosMensagem(dadosNormalizados);
        setModalAberto(true);

        try {
            const dadosColaboradores = await obterColaboradores();
            setColaboradores(dadosColaboradores);
        } catch (error) {
            console.error("Erro ao buscar colaboradores:", error);
        }
    }

    async function enviarMensagem(colaboradorId) {
        try {
            const { mensagemId, plano, periodicidade, valor } = dadosMensagem;

            const contato = await obterContato(
                colaboradorId,
                mensagemId,
                plano,
                periodicidade,
                valor
            );

            if (!contato || !contato.whatsApp) {
                console.error("Dados de contato não foram retornados corretamente.");
                return;
            }

            // Garante que apenas números sejam enviados na URL do WhatsApp
            const telefoneLimpo = contato.whatsApp.replace(/\D/g, '');
            const mensagemEncoded = encodeURIComponent(contato.mensagem);

            const url = `https://wa.me/${telefoneLimpo}?text=${mensagemEncoded}`;
            window.open(url, "_blank");
        } catch (error) {
            console.error("Erro ao obter contato:", error);
        }
    }

    return {
        modalAberto,
        setModalAberto,
        mensagemId: dadosMensagem.mensagemId,
        colaboradores,
        abrirModalContato,
        enviarMensagem
    };
}

export default useContato;