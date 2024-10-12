import '@testing-library/jest-dom';

global.importMetaEnv = {
  VITE_API_KEY: 'your_mocked_api_key', // Replace 'your_mocked_api_key' with a mock value
};

Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: global.importMetaEnv,
    },
  },
});
