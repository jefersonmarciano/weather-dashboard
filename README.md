# Weather Dashboard

## 🇧🇷 Descrição do Projeto

O **Weather Dashboard** é uma aplicação web desenvolvida em React que permite aos usuários buscar informações meteorológicas atuais e previsões para diversas cidades ao redor do mundo. Além disso, os usuários podem salvar suas cidades favoritas, que são mantidas utilizando o **LocalStorage**, garantindo que as preferências permaneçam mesmo após recarregar ou fechar a página. A aplicação também suporta múltiplos idiomas, proporcionando uma experiência personalizada para usuários de diferentes regiões.

### ⚙️ Funcionalidades

- **Busca de Cidades:** Permite que os usuários pesquisem e visualizem dados meteorológicos de qualquer cidade.
- **Favoritos Persistentes:** Usuários podem adicionar ou remover cidades dos favoritos, com os dados sendo salvos no LocalStorage.
- **Suporte a Múltiplos Idiomas:** Integração com `i18next` para oferecer suporte a diferentes idiomas.
- **Interface Responsiva:** Design adaptável para diversos dispositivos e tamanhos de tela.
- **Ícones de Clima:** Exibição de ícones representativos para diferentes condições climáticas.

### 🛠 Tecnologias Utilizadas

- **Front-end:** React, Material-UI (MUI)
- **Gerenciamento de Estado:** Context API
- **Internacionalização:** i18next
- **Requisições HTTP:** Axios
- **Armazenamento no Navegador:** LocalStorage
- **Outras Bibliotecas:** react-icons

### 🚀 Começando

#### 🔧 Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior) ou **yarn**

#### 📦 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/weather-dashboard.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd weather-dashboard
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. **Configure a Chave de API:**

   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a seguinte linha ao `.env`:

     ```env
     REACT_APP_WEATHER_API_KEY=046c5dc7f1a8a9cf047dca5493eee684
     ```

5. **Inicie a aplicação:**

   ```bash
   npm start
   ```

   ou

   ```bash
   yarn start
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### 📄 Documentação

- **API do OpenWeatherMap:** [https://openweathermap.org/api](https://openweathermap.org/api)
- **Documentação do i18next:** [https://www.i18next.com/](https://www.i18next.com/)
- **Documentação do Material-UI:** [https://mui.com/](https://mui.com/)

### 🧑‍💻 Contribuindo

1. **Fork este repositório**
2. **Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)**
3. **Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)**
4. **Push para a branch (`git push origin feature/AmazingFeature`)**
5. **Abra um Pull Request**

### 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🇺🇸 Project Description

The **Weather Dashboard** is a React-based web application that allows users to search for current weather information and forecasts for various cities worldwide. Additionally, users can save their favorite cities, which are stored using **LocalStorage**, ensuring preferences persist even after reloading or closing the page. The application also supports multiple languages, providing a personalized experience for users from different regions.

### ⚙️ Features

- **City Search:** Allows users to search and view weather data for any city.
- **Persistent Favorites:** Users can add or remove cities from favorites, with data saved in LocalStorage.
- **Multilingual Support:** Integrated with `i18next` to offer support for different languages.
- **Responsive Interface:** Adaptive design for various devices and screen sizes.
- **Weather Icons:** Displays representative icons for different weather conditions.

### 🛠 Technologies Used

- **Front-end:** React, Material-UI (MUI)
- **State Management:** Context API
- **Internationalization:** i18next
- **HTTP Requests:** Axios
- **Browser Storage:** LocalStorage
- **Other Libraries:** react-icons

### 🚀 Getting Started

#### 🔧 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

#### 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Configure the API Key:**

   - Create a `.env` file in the root of the project.
   - Add the following line to the `.env` file:

     ```env
     REACT_APP_WEATHER_API_KEY=046c5dc7f1a8a9cf047dca5493eee684
     ```

5. **Start the application:**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

### 📄 Documentation

- **OpenWeatherMap API:** [https://openweathermap.org/api](https://openweathermap.org/api)
- **i18next Documentation:** [https://www.i18next.com/](https://www.i18next.com/)
- **Material-UI Documentation:** [https://mui.com/](https://mui.com/)

### 🧑‍💻 Contributing

1. **Fork this repository**
2. **Create a branch for your feature (`git checkout -b feature/AmazingFeature`)**
3. **Commit your changes (`git commit -m 'Add some AmazingFeature'`)**
4. **Push to the branch (`git push origin feature/AmazingFeature`)**
5. **Open a Pull Request**

### 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.