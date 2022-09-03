import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const Form = () => {
    const nav = useNavigate();
    const { inputValues, handleInputChange, resetForm } = useForm({
        nome: '',
        rua: '',
        numero: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues);
        resetForm();
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
                        <label htmlFor="nome" className="form-label mt-2">Nome</label>
                        <input
                            id='nome'
                            name='nome'
                            type='text'
                            value={inputValues.nome}
                            onChange={handleInputChange}
                            className='form-control'
                            placeholder='Nome' 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rua" className="form-label mt-2">Rua</label>
                        <input
                            id='rua'
                            name='rua'
                            type='text'
                            value={inputValues.rua}
                            onChange={handleInputChange}
                            className='form-control'
                            placeholder='Rua'
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="numero" className="form-label mt-2">Número</label>
                        <input
                            id='numero'
                            name='numero'
                            type='text'
                            value={inputValues.numero}
                            onChange={handleInputChange}
                            className='form-control'
                            placeholder='Número'
                        />
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