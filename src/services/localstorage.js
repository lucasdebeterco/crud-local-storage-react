export const getListaPessoas = () => {
  if(!localStorage["@pessoas"]){
    localStorage["@pessoas"] = JSON.stringify([]);
  }

  let pessoas = JSON.parse(localStorage["@pessoas"]);
  return pessoas;
}
