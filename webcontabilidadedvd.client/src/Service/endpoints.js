import { api } from './api'; 

export const Listar = () => {
    return api.get('/api/planos');
}

export const ListarPorId = (id) => {
    return api.get(`/api/planos/listar/${id}`);
}

export const Validar = (codigo, planoId, periodicidade) => {
    return api.post('/api/cupons/validar', {
        codigo,
        planoId,
        periodicidade
    });
}

export async function obterContato(colaboradorId, mensagemId) {
    const response = await api.get("/api/Contato", {
        params: {
            colaboradorId,
            mensagemId
        }
    });
    return response.data;
}

export const obterColaboradores = async () => {
    const response = await api.get("/api/Colaborador");

    return response.data;
};

