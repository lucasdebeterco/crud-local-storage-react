import { useEffect, useState } from 'react';
import { getListaPessoas } from '../services/localstorage';
import { Item } from './Item';

export const Lista = () => {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        setPessoas(getListaPessoas());
    })
    return (
        <div>
            <h1 className='my-5 text-center'>Lista</h1>

            {
                pessoas.length > 0 ? (
                    <div className="card bg-secondary p-3">
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Rua</th>
                                <th>Número</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            { pessoas.map(pessoa => 
                                <Item 
                                    key={pessoa.id} 
                                    pessoa={pessoa}
                                    setPessoas={setPessoas}
                                />
                            ) }
                        </tbody>
                    </table>
                </div>
                ) : (
                    <h3 className="text-center">
                        Sem pessoas cadastradas
                    </h3>
                )
            }
        </div>
    )
}