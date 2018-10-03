Bootstrap RN

- Criar repositório local do projeto;
- Executar linha de comando no terminal: 'react-native init <nome-do-projeto>';
- Acesse a pasta criada <nome-do-projeto> pelo terminal;
- Execute a linha de comando para instalação do pacote eslint: 'yarn add eslint-config-rallycoding --save-dev';
- Crie um arquivo chamado '.eslintrc' e inclua o código:
    {
        "extends": "rallycoding"
    }
- Execute a linha de comando para iniciar aplicativo: 'react-native run-android';
- Instale os pacotes que serão usados no projeto:
    'yarn add base-64 --save'
    'yarn add firebase --save'
    'yarn add lodash --save'
    'yarn add react-native-router-flux --save'
    'yarn add react-native-tab-view --save'
    'yarn add redux --save'
    'yarn add react-redux --save'
    'yarn add redux-thunk --save'

- Iniciar o Git:
    'git init'
    'git add .'

FIX:
- Em caso de erro de carregamento, execute o comando a seguir:
    'yarn add @babel/runtime'
    ou
    'adb reverse tcp:8081 tcp:8081'
