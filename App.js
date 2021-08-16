import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';
import Rotas from './src/Rotas'
import TelaPadrao from "./src/componentes/TelaPadrao";

Reactotron.configure().useReactNative().connect();  
console.tron = Reactotron;

export default function App() {
  console.tron.log('Alura');
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
