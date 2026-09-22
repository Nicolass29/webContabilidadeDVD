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