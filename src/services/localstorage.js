import uuid from 'react-uuid';

export const getListaPessoas = () => {
  if(!localStorage["@pessoas"]){
    localStorage["@pessoas"] = JSON.stringify([]);
  }

  let pessoas = JSON.parse(localStorage["@pessoas"]);
  return pessoas;
}

export const addPessoa = (pessoa) => {
    const pessoas = getListaPessoas();
    pessoas.push({id: uuid(), ...pessoa});
    localStorage["@pessoas"] = JSON.stringify(pessoas);
}