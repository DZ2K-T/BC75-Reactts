
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "flowbite/dist/flowbite.min.js"
import "./index.scss"
import store from './store';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
