import { useState } from "react";
import { obterContato, obterColaboradores } from '../Service/endpoints';

function useContato() {
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagemId, setMensagemId] = useState(null);
    const [colaboradores, setColaboradores] = useState([]);

    async function abrirModalContato(idMensagem) {
        setMensagemId(idMensagem);
        setModalAberto(true);

        try {
            const dados = await obterColaboradores();

            setColaboradores(dados);
        } catch (error) {
            console.error("Erro ao buscar colaboradores:", error);
        }
    }

    async function enviarMensagem(colaboradorId, mensagemId) {
        try {
            const contato = await obterContato(
                colaboradorId,
                mensagemId
            );

            const telefone = contato.whatsApp;
            const mensagem = encodeURIComponent(contato.mensagem);

            const url = `https://wa.me/${telefone}?text=${mensagem}`;

            window.open(url, "_blank");
        } catch (error) {
            console.error("Erro ao obter contato:", error);
        }
    }

    return {
        modalAberto,
        setModalAberto,
        mensagemId,
        colaboradores,
        abrirModalContato,
        enviarMensagem
    };
}

export default useContato;