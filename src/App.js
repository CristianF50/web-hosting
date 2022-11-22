import logo from './logo.svg';
import './Styles/Global/Global.scss';
import 'antd/dist/reset.css';
import {ConfigProvider} from 'antd';
import { BrowserRouter } from 'react-router-dom';
import esEs from 'antd/es/locale/es_ES';

import Routes from './Routes';

function App() {
  return (
    <ConfigProvider locale={esEs}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
