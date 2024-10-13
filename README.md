# Weather App with React, Vite, and Styled Components

<p align='center'>  
<img src="https://github.com/abdelrahman-mohammed1/weatherAppTask/blob/main/src/assets/screenshot.jpg">
</p>
![Site Screenshot]('')
This project is a weather application built with React and Vite. It fetches weather data from the OpenWeatherMap API and displays it along with a background image fetched from Unsplash based on the city name. The application also uses `react-toastify` for notifications and `styled-components` for styling.

## Features

- Fetches and displays weather data for a given city.
- Displays a background image based on the city name.
- Provides notifications for errors and updates using `react-toastify`.
- Responsive design using `styled-components`.
- Uses `prop-types` for type-checking props.
- Uses `jest` for testing.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Styled Components**: A library for styling React components using tagged template literals.
- **React Toastify**: A library for displaying notifications in React applications.
- **OpenWeatherMap API**: An API for fetching weather data.
- **Unsplash API**: An API for fetching images.
- **Prop-Types**: A library for type-checking React props.
- **Jest**: A testing framework for JavaScript.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/abdelrahman-mohammed1/weatherAppTask/issues)**: Submit bugs found or log feature requests for the `weatherAppTask` project.
- **[Submit Pull Requests](https://github.com/abdelrahman-mohammed1/weatherAppTask/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/abdelrahman-mohammed1/weatherAppTask/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/abdelrahman-mohammed1/weatherAppTask
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/abdelrahman-mohammed1/weatherAppTask/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=abdelrahman-mohammed1/weatherAppTask">
   </a>
</p>
</details>

Please make sure to update tests as appropriate.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdelrahman-mohammed1/weather-app.git
   cd weather-app
   ```
2. Install dependencies:
   ```bash
      npm install
        # or
      yarn install
   ```
3. Create a .env file in the root directory and add you API keys:

   ```bash
    VITE_API_KEY=your_openweathermap_api_key
    VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```

Running the Application

1.  Start the development server:

```bash
   npm run dev
```

2.  Serve the production build:

```bash
npm run build
```

## Acknowledgments

- <a href="https://react.dev/learn">React</a>
- <a href="https://vite.dev/">Vite</a>
- <a href="https://styled-components.com/">Styled Components</a>
- <a href="https://fkhadra.github.io/react-toastify/introduction">React Toastify</a>
- <a href="https://openweathermap.org/api">OpenWeatherMap API</a>
- <a href="https://unsplash.com/developers">Unsplash API</a>
- <a href="https://www.npmjs.com/package/prop-types">Prop-Types</a>
- <a href="https://jestjs.io/">Jest</a>

---

### Repository Structure

```sh
└── weatherAppTask/
    ├── README.md
    ├── babel.config.cjs
    ├── eslint.config.js
    ├── index.html
    ├── jest.config.cjs
    ├── jest.setup.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── vite.svg
    │   └── weatherIcon.png
    ├── spinnerweather.json
    ├── src
    │   ├── App.jsx
    │   ├── __tests__
    │   ├── components
    │   ├── hooks
    │   ├── index.css
    │   ├── main.jsx
    │   └── ui
    └── vite.config.js
```

---

### Usage

1.Enter a city name in the input field and press Enter or click the Submit button

2.The application will fetch and display the weather data and background image for the entered city.

3.If the city name is incorrect, a toast notification will be displayed, and the previous valid city's data and background image will be shown.

### Prop-Types

This project uses prop-types for type-checking props in React components. This helps catch bugs by ensuring that components receive props of the correct type. For example:

```bash
import PropTypes from 'prop-types';

const WeatherDetail = ({ kindDetail, result, Icon }) => (
  <div>
    <Icon />
    <p>{kindDetail}: {result}</p>
  </div>
);

WeatherDetail.propTypes = {
  kindDetail: PropTypes.string.isRequired,
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Icon: PropTypes.element.isRequired,
};

```

### Testing

This project uses jest for testing. Jest is a delightful JavaScript testing framework with a focus on simplicity. To run the tests, use the following command:

```bash
 npm test
    #or
 yarn test
```

## License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.
