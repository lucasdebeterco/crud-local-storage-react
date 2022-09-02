import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-outline-secondary" onClick={() => nav('/')}>
                    Voltar
                </button>
                <h1>Adicionar</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={ handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label mt-2">Nome</label>
                        <input type="text" className='form-control' id='name' placeholder='Nome' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rua" className="form-label mt-2">Rua</label>
                        <input type="text" className='form-control' id='rua' placeholder='Rua' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="numero" className="form-label mt-2">Número</label>
                        <input type="text" className='form-control' id='numero' placeholder='Número' />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type='submit' className="btn btn-outline-primary">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}