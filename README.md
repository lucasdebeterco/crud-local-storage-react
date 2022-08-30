# crud-local-storage-react
Criar um formulário utilizando JS e salvando os dados no localStorage

Formulário deve conter os seguintes campos:
- Nome
- Rua
- Número
- CEP
- Região (combobox)
- UF (combobox) 
- Município (combobox)
- Nacionalidade (brasileiro ou estrangeiro - Radio Button)
- Data de Nascimento.

Essas informações devem ser armazenadas em um objeto.

As opções para serem listadas em região, UF e município devem ser listadas de um array definido inicialmente no código (não é necessário criar esse array com todos os valores, pode ser duas regiões, dois estados cada região e duas cidades cada estado)

Criar um menu de navegação na página para navegar entre a listagem e cadastro.

Deve-se validar o cadastro contendo as informações. Validações obrigatórias:
- Ao escolher uma região, deve-se filtrar os campos de UF e município, para apresentar somente aquelas informações da região escolhida; 
- Ao escolher uma UF, deve-se filtrar os municípios para apresentar somente aqueles relacionados à UF escolhida;
- Obrigar o preenchimento de todas as informações antes da apresentação em outra janela.
- Listar todos os endereços cadastrados em uma tabela
