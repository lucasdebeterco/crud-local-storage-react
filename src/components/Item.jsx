import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Item = ({ pessoa }) => {
    const { id, nome, rua, numero } = pessoa;
    const navigate = useNavigate();
    return (
        <tr>
            <th>{nome}</th>
            <th>{rua}</th>
            <th>{numero}</th>
            <th>
                <div className='d-flex gap-3'>
                    <span role='button' className="badge bg-success" onClick={() => navigate(`/editar/${id}`)}>
                        Editar
                    </span>
                    <span role='button' className="badge bg-danger">
                        Editar
                    </span>
                </div>
            </th>
        </tr>

    )
}