import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>ISOLATION TRAINING</h1>
       <table class="tabla">
         <tr class="tr1">
           <td><strong>Nombres</strong></td>
           <td><strong>Apellidos</strong></td>
           <td><strong>Correo</strong></td>
           <td><strong>Celular</strong></td>
         </tr>
         <tr>
           <td>Yeferson</td>
           <td>Lopera Barrientos</td>
           <td>www.yeferson20lb@gmail.com</td>
           <td>123456789</td>
         </tr>
         <tr>
           <td>Santiago</td>
           <td>Ortiz Hernández</td>
           <td>so4261427@gmail.com</td>
           <td>123456789</td>
         </tr>
         <tr>
           <td>Tomás</td>
           <td>Pérez</td>
           <td>tomaspro56@gmail.com</td>
           <td>123456789</td>
         </tr>
         <tr>
           <td>Yeison</td>
           <td>Posada Bolívar</td>
           <td>Yeisonposadabolivar@gmail.com</td>
           <td>123456789</td>
         </tr>
       </table>
    </div>
  );
}

export default App;
