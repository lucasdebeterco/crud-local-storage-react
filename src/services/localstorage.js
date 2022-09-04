import uuid from 'react-uuid';

export const getListaPessoas = () => {
  if(!localStorage["@pessoas"]){
    localStorage["@pessoas"] = JSON.stringify([]);
  }

  let pessoas = JSON.parse(localStorage["@pessoas"]);
  return pessoas;
}

export const getPessoaById = (id) => {
    const pessoas = getListaPessoas();
    const pessoa = pessoas.find(pessoa => pessoa.id === id);
    return pessoa;
}

export const addPessoa = (pessoa) => {
    const pessoas = getListaPessoas();
    pessoas.push({id: uuid(), ...pessoa});
    localStorage["@pessoas"] = JSON.stringify(pessoas);
}

export const editPessoa = (id, novaPessoa) => {
    let pessoas = getListaPessoas();
    pessoas = pessoas.filter((pessoa) => pessoa.id !== id);
    pessoas.push(novaPessoa);
    localStorage['@pessoas'] = JSON.stringify(pessoas);
}

export const deletePessoa = (id) => {
    let pessoas = getListaPessoas();
    pessoas = pessoas.filter((pessoa) => pessoa.id !== id);
    localStorage['@pessoas'] = JSON.stringify(pessoas);
}


