import React, { Component } from "react";
import "./Form.css";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.min.css";

export default class Form extends Component {
	state = {
        date: moment(),
        weight: null
	};
	onSubmit = e => {
		e.preventDefault();

        const {date, weight} = this.state;
		console.log(date, weight);
		if (!weight || weight < 0) {
			swal("Lectura invalida", "El registro de peso debe ser valido", "error");
		}else{
			this.props.onAcepted(this.state)
		}
    };
    
	changeDate = date => {
		this.setState({ date });
    };
    
	changeWeight = event => {
		this.setState({ weight: event.target.value });
    };
    
	render() {
		return (
			<div className="row container-modal">
				<div className="form-container col s4 offset-s4 z-depth-4">
					<form action="">
						<label htmlFor="fecha">
							Fecha:
							<DatePicker
								className="inputData"
								selected={this.state.date}
								onChange={this.changeDate}
							/>
						</label>
						<label htmlFor="peso">
							Peso:
							<input
								type="text"
								name="weight"
								onChange={this.changeWeight}
								id="weight"
								placeholder="peso"
								className="inputData"
							/>
						</label>
						<input
							type="button"
							value="Agregar"
							className="btn waves-effect blue lighten-3 btn-action"
							onClick={this.onSubmit}
						/>
						<input
							type="button"
							value="Cerrar"
							className="btn waves-effect blue lighten-3 btn-action"
						/>
					</form>
				</div>
			</div>
		);
	}
}
