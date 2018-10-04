import React, { Component } from 'react';
import NavBar from './components/NavBar';
import moment from 'moment';
import Chart from './components/Chart'
import DataInfo from './components/DataInfo';
import Form from './components/Form';
import './App.css';

moment.locale('es')
class App extends Component {

  state = {
    registros: []
  }

  getRegistros = () => {
    var fechas = [0,1,2,3,4,5,6].map( dia =>
      [+moment().add(dia, 'days'), Math.random()*200] 
    )
    return fechas;
  }    
  
  componentDidMount(){
  }

  addRegister = ({ date, weight}) => {
    console.log('APP',date,weight)
    const newData = [+date,+weight]
    this.setState((prevState,props)=>({
      registros:[...prevState.registros,newData]
    }))
  }

  render() {

    let { registros } = this.state
    const btnAdd = {
      position: "absolute",
      top: "80%",
      right: "10%"
    }

    return (
      <div>      
        <NavBar className="menu"/>
        <main>
        <Form  onAcepted ={this.addRegister}/>
          <div className="valign-wrapper">
            <h2>Registro Diario de Peso</h2>
          </div>
          <div className="row">
            <div className="col s12 m12 l6">
              <Chart registros={registros} />
            </div>
            <div className="col s12 m12 l6">
              <DataInfo registros={registros} />
            </div>
          </div>
          <a className="btn btn-floating btn-large waves-effect waves-light red"
          style ={btnAdd}
          ><i className="material-icons">add</i></a>
        </main>
      </div>
    );
  }
}

export default App;
