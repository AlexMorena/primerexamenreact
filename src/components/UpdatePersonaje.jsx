import React, { Component } from 'react'
import ServicesSeries from '../services/ServicesSeries'
import { Navigate } from 'react-router-dom';

export default class UpdatePersonaje extends Component {
    service = new ServicesSeries();
    state = {
        status: false,
        series: [],
        personajes: [],
        serie: [],
        personaje: [],
        idSerie: [],
        idPersonaje: []
    }
    cajaIdSerie = React.createRef();
    cajaIdPersonaje = React.createRef();

    cargarSeries = () => {
        this.service.cargarSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    cargarPersonajeId = (idPersonaje) => {
        this.service.cargarPersonajeId(idPersonaje).then((result) => {
            this.setState({
                personaje: result
            })
        })
    }

    cargarPersonas = () => {
        this.service.cargarPersonajes().then((result) => {
            this.setState({
                personajes: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarSeries();
        this.cargarPersonas();
        console.log(this.cajaIdSerie);
        // if (this.cajaIdSerie) {
        //     this.cargarSerieId(parseInt(this.cajaIdSerie.current.value));
        // }
        // if (this.cajaIdPersonaje) {
        //     this.cargarPersonajeId(parseInt(this.cajaIdPersonaje.current.value));
        // }
    }

    cargarSerieId = (idSerie) => {
        this.service.cargarSerieId(idSerie).then((result) => {
            this.setState({
                serie: result
            })
        })
    }


    modificarPersonaje = (event) => {
        event.preventDefault();
        let personaje = {
            idSerie: parseInt(this.cajaIdSerie.current.value),
            idPersonaje: parseInt(this.cajaIdPersonaje.current.value)
        }

        this.service.updatePersonaje(this.cajaIdPersonaje.current.value, this.cajaIdSerie.current.value, personaje)
            .then((result) => {
                this.setState({
                    status: true
                })
            })

    }
    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Modificar Personaje de Serie</h1>
                    <br></br>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Selecciona una serie:
                            </label>
                            <select
                                ref={this.cajaIdSerie}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            >
                                {
                                    this.state.series.map((ser, index) => {
                                        return (
                                            <option key={index} value={ser.idSerie}>{ser.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <br></br>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Selecciona un personaje:
                            </label>
                            <select
                                ref={this.cajaIdPersonaje}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            >
                                {
                                    this.state.personajes.map((per, index) => {
                                        return (
                                            <option key={index} value={per.idPersonaje}>{per.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button
                            onClick={this.modificarPersonaje}
                            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Modificar
                        </button>
                        {
                            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-around items-center gap-4">

                                <img
                                    src={this.state.serie.imagen}
                                    style={{ width: "100px", height: "100px" }}
                                    className="object-cover rounded-lg shadow-sm border border-gray-200"
                                />
                                <img
                                    src={this.state.personaje.imagen}
                                    style={{ width: "100px", height: "100px" }}
                                    className="object-cover rounded-lg shadow-sm border border-gray-200"
                                />
                            </div>

                        }
                    </div>
                </div>
            )
        }
    }
}