import { Item } from './Item';

export const Lista = () => {
    return (
        <div>
            <h1 className='my-5 text-center'>Lista</h1>

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
                        <Item />
                    </tbody>
                </table>
            </div>
        </div>
    )
}