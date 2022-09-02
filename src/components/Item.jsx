import React from 'react';

export const Item = () => {
    return (
        <tr>
            <th>Exemplo Nome</th>
            <th>Exemplo Rua</th>
            <th>Exemplo Número</th>
            <th>
                <div className='d-flex gap-3'>
                    <span role='button' className="badge bg-success">
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