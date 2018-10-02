import React,{Component} from 'react';
import Highcharts  from 'highcharts';

export default class Chart extends Component {
   
    constructor (props){
        super(props)
        this.state = {
            registros: this.props.registros
        }
    }

    componentDidMount() {
        this.initGrafica()
    }

    initGrafica = () => {
        let { registros } = this.state
        Highcharts.chart('grafico',{
            title: {
                text: 'Registro de Peso'
            },
            xAxis:{
              type: "datetime"
            },
            series: [{
                name: 'Test',
                data: registros
                
            }]
            })
    }
    render(){
        return(
            <div id="grafico" className="z-depth-2 hoverable"/>
        )
    }
}