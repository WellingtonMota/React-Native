# Bootstrap RN

## Criar repositório local do projeto;
## Executar linha de comando no terminal: 'react-native init <nome-do-projeto>';
## Acesse a pasta criada <nome-do-projeto> pelo terminal;
## Execute a linha de comando para instalação do pacote eslint: 'yarn add eslint-config-rallycoding --save-dev';
## Crie um arquivo chamado '.eslintrc' e inclua o código:
    ```
    {
        "extends": "rallycoding"
    }
    ```
## Execute a linha de comando para iniciar aplicativo: 'react-native run-android';
## Instale os pacotes que serão usados no projeto:
    - [base-64]
    - [firebase]
    - [lodash]
    - [react-native-router-flux]
    - [react-native-tab-view]
    - [redux]
    - [react-redux]
    - [redux-thunk]


FIX:
## Em caso de erro de carregamento, execute o comando a seguir:

### 'yarn add @babel/runtime'

### 'adb reverse tcp:8081 tcp:8081'

### npm run start --reset-cache
ou
### react-native start --reset-cache



