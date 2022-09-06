import { useState, useEffect } from 'react';
import Select from 'react-select'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { addPessoa, getPessoaById, editPessoa } from '../services/localstorage';

export const Form = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [showAlert, setShowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        nome: '',
        rua: '',
        numero: '',
        cep: '',
        regiao: '',
        estado: '',
        cidade: '',
    })

    const regiao = [
        {
            value: "Sul",
            label: "Sul"
        },
        {
            value: "Sudeste",
            label: "Sudeste"
        },
    ];
    
    const estadosSul = [
        {
            value: "SC",
            label: "SC"
        },
        {
            value: "PR",
            label: "PR"
        },
    ];
    const estadosSudeste = [
        {
            value: "RJ",
            label: "RJ"
        },
        {
            value: "SP",
            label: "SP"
        },
    ];

    const cidadesSantaCatarina = [
        {
            value: "Florianópolis",
            label: "Florianópolis"
        },
        {
            value: "Rio do Sul",
            label: "Rio do Sul"
        },
    ];

    const cidadesParana = [
        {
            value: "Maringá",
            label: "Maringá"
        },
        {
            value: "Curitiba",
            label: "Curitiba"
        },
    ];

    const cidadesRioDeJaneiro = [
        {
            value: "Niterói",
            label: "Niterói"
        },
        {
            value: "Petrópolis",
            label: "Petrópolis"
        },
    ];

    const cidadesSaoPaulo = [
        {
            value: "Guarulhos",
            label: "Guarulhos"
        },
        {
            value: "Campinas",
            label: "Campinas"
        },
    ];

    const [selectedRegiao, setSelectedRegiao] = useState("");
    const [selectedEstado, setSelectedEstado] = useState("");

    const changeSelectOptionHandlerRegiao = (event) => {
        inputValues.regiao = event.value
        setSelectedRegiao(event.value);
    };

    const changeSelectOptionHandlerEstado = (event) => {
        inputValues.estado = event.value
        setSelectedEstado(event.value);
    };

    const changeSelectOptionHandlerCidade = (event) => {
        inputValues.cidade = event.value
    };

    let estados = null;
    let cidades = null;

    if (selectedRegiao === "Sul") {
        estados = estadosSul;
    } else if (selectedRegiao === "Sudeste") {
        estados = estadosSudeste;
    }
    
    if (selectedEstado === "SC") {
        cidades = cidadesSantaCatarina;
    } else if (selectedEstado === "PR") {
        cidades = cidadesParana;
    } else if (selectedEstado === "SP") {
        cidades = cidadesSaoPaulo;
    } else if (selectedEstado === "RJ") {
        cidades = cidadesRioDeJaneiro;
    }
    
    useEffect(() => {
        if(id) {
            const pessoa = getPessoaById(id);
            setForm(pessoa);
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editPessoa(id, inputValues) : addPessoa(inputValues);
        setShowAlert(true);
        resetForm();
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    return (
        <div>
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-outline-secondary" onClick={() => nav('/')}>
                    Voltar
                </button>
                <h1>{ id ? 'Editar ' : 'Adicionar '}Pessoa</h1>
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

                    <div className="form-group">
                        <label htmlFor="cep" className="form-label mt-2">CEP</label>
                        <input
                            id='cep'
                            name='cep'
                            type='text'
                            value={inputValues.cep}
                            onChange={handleInputChange}
                            className='form-control'
                            placeholder='CEP'
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="regiao" className="form-label mt-2">Região</label>
                        <Select 
                            id='regiao'
                            name='regiao'
                            options={regiao}
                            onChange={changeSelectOptionHandlerRegiao}
                        >
                        </Select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="estado" className="form-label mt-2">Estado</label>
                        <Select 
                            id='estado'
                            name='estado'
                            onChange={changeSelectOptionHandlerEstado}
                            options={estados}
                        >
                        </Select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cidade" className="form-label mt-2">Cidade</label>
                        <Select 
                            id='cidade'
                            name='cidade'
                            onChange={changeSelectOptionHandlerCidade}
                            options={cidades}
                        >
                        </Select>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type='submit' className="btn btn-outline-primary">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success text-white" role="alert">
                            Pessoa adicionada.
                        </div>
                    </div>
                )
            }
        </div>
    )
}