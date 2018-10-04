import React, { Component } from "react";
import NavBar from "./components/NavBar";
import moment from "moment";
import Chart from "./components/Chart";
import DataInfo from "./components/DataInfo";
import Form from "./components/Form";
import "./App.css";

moment.locale("es");
class App extends Component {
	state = {
		registros: [],
		modal: false,
	};

	getRegistros = () => {
		var fechas = [0, 1, 2, 3, 4, 5, 6].map(dia => [
			+moment().add(dia, "days"),
			Math.random() * 200,
		]);
		return fechas;
	};

	componentDidMount() {
		if (localStorage.getItem("registros")) {
			const registros = JSON.parse(localStorage.getItem("registros"));
			this.setState({
				registros,
			});
		}
	}

	addRegister = ({ date, weight }) => {
		const newData = [+date, +weight];
		const newStateRegister = [...this.state.registros, newData];
		localStorage.setItem("registros", JSON.stringify(newStateRegister));
		this.setState({
			registros: newStateRegister,
		});
	};

	onCloseModal = () => {
		this.setState({ modal: false });
	};

	resetRegisters = () => {
		localStorage.clear();
		this.setState({ registros: [] });
	};

	render() {
		let { registros } = this.state;
		const btnAdd = {
			position: "absolute",
			top: "80%",
			right: "10%",
		};

		return (
			<div>
				<NavBar className="menu" />
				<main>
					<Form
						visible={this.state.modal}
						onAcepted={this.addRegister}
						closeModal={this.onCloseModal}
					/>
					<div className="valign-wrapper">
						<h2>Registro Diario de Peso</h2>
					</div>
					<div className="row">
						<div className="col s12 m12 l6">
							<Chart registros={this.state.registros} />
							<a className="btn" onClick={this.resetRegisters}>
								Reiniciar
							</a>
						</div>
						<div className="col s12 m12 l6">
							<DataInfo registros={registros} />
						</div>
					</div>
					<a
						className="btn btn-floating btn-large waves-effect waves-light red"
						style={btnAdd}
					>
						<i
							className="material-icons"
							onClick={() => this.setState({ modal: true })}
						>
							add
						</i>
					</a>
				</main>
			</div>
		);
	}
}

export default App;
