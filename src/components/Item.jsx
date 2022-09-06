import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePessoa, getListaPessoas } from '../services/localstorage';

export const Item = ({ pessoa, setPessoas }) => {
    const { id, nome, rua, numero, cep, regiao, estado, cidade } = pessoa;
    const navigate = useNavigate();

    const removePessoa = () => {
        deletePessoa(id);
        setPessoas(getListaPessoas());
    }
    return (
        <tr>
            <th>{nome}</th>
            <th>{rua}</th>
            <th>{numero}</th>
            <th>{cep}</th>
            <th>{regiao}</th>
            <th>{estado}</th>
            <th>{cidade}</th>
            <th>
                <div className='d-flex gap-3'>
                    <span role='button' className="badge bg-success" onClick={() => navigate(`/editar/${id}`)}>
                        Editar
                    </span>
                    <span role='button' className="badge bg-danger" onClick={() => removePessoa()}>
                        Deletar
                    </span>
                </div>
            </th>
        </tr>
    )
}