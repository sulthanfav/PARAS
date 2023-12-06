import { createSignal, type Component, onMount } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
// import Incident from './Containers/incident_management/incident_Tabular';
import Root from './routing/routing-component'

import { useStore } from './integration-extension/store';
import { useNavigate } from '@solidjs/router';
import Login from './page/login/login';
import Paras from './page/paras/paras';

const App: Component = () => {
  const [{ sessionStore }] = useStore();
  const navigate = useNavigate();
  const [needLogin, setNeedLogin] = createSignal(true);

  onMount(() => {
    console.log('session ', sessionStore.sessionData);
    if (sessionStore.sessionData) {
      setNeedLogin(!needLogin());
    }
    console.log('need login ' + needLogin());
    if (needLogin()) {
      navigate('/login', { replace: true });
    }
  });
  return (
    <>
      {!needLogin() ? <Root/> : <Login /> }
      {/* {!needLogin() ? <Root/> : <Paras />} */}
    </>
  );
};

export default App;
