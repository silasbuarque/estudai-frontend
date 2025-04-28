# EstudAI

Aplicação web para gravação de áudio desenvolvida com React.

## 📋 Descrição

Este projeto é uma aplicação front-end para gravação de áudio diretamente do navegador. A interface permite gravar e parar.

## ✨ Funcionalidades

- Gravação de áudio da tela
- Interface amigável e responsiva

## 🚀 Como usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v14.x ou superior)
- [npm](https://www.npmjs.com/) (v6.x ou superior) ou [Yarn](https://yarnpkg.com/)

### 📥 Clonando o repositório

```bash
# Clone este repositório
git clone https://github.com/silasbuarque/estudai-frontend

# Acesse a pasta do projeto
cd gravador-audio
```

### ⚙️ Instalando dependências

```bash
# Utilizando npm
npm install

# OU utilizando Yarn
yarn
```

### 🏃‍♀️ Rodando a aplicação

```bash
# Utilizando npm
npm start

# OU utilizando Yarn
yarn start
```

A aplicação será aberta automaticamente no seu navegador no endereço `http://localhost:3000`.

## 🛠️ Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/) - v19.1.0
- [React DOM](https://reactjs.org/docs/react-dom.html) - v19.1.0
- [React Scripts](https://www.npmjs.com/package/react-scripts) - v5.0.1

## 📝 Estrutura do Projeto

```
gravador-audio/
├── public/             # Arquivos públicos
├── src/                # Código fonte
│   ├── components/     # Componentes React
│   │   ├── AudioRecorder.jsx
│   │   ├── Header.jsx
│   │   ├── RecordingButtons.jsx
│   │   └── ResultsDisplay.jsx
│   ├── hooks/          # Custom React Hooks
│   │   └── useTheme.js
│   ├── App.js          # Componente principal
│   └── index.js        # Ponto de entrada
└── package.json        # Dependências e scripts
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Feito por Silas Buarque.
