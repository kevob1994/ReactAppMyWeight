import React, { Component } from 'react';
import NavBar from './components/NavBar';
import moment from 'moment';
import Chart from './components/Chart'
import DataInfo from './components/DataInfo';

moment.locale('es')
class App extends Component {
  state = {
    registros: [0,1,2,3,4,5,6].map( dia =>
      [+moment().add(dia, 'days'), Math.random()*200] 
    )
  }

  getRegistros = () => {
    var fechas = [0,1,2,3,4,5,6].map( dia =>
      [+moment().add(dia, 'days'), Math.random()*200] 
    )
    console.log(fechas);
    
    return fechas;
  }
    
  
  componentDidMount(){

  }

  render() {
    let { registros } = this.state
    return (
      <div>
        <NavBar />
        <main>
          <div className="valign-wrapper">
            <h2>Registro Diario de Peso</h2>
          </div>
          <div className="row">
            <div className="col s6">
              <Chart registros={registros} />
            </div>
            <div className="col s6">
              <DataInfo registros = {registros} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
