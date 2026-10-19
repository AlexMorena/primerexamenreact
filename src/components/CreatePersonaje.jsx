import React, { Component } from 'react'
import ServicesSeries from '../services/ServicesSeries';
import { Navigate } from 'react-router-dom';

export default class CreatePersonaje extends Component {
    service = new ServicesSeries();
    state = {
        status: false,
        series: [],
    }
    cajaId = 0;
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSerie = React.createRef();

    insertarPersonaje = (event) => {
        event.preventDefault();
        let personaje = {
            idPersonaje: this.cajaId,
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            idSerie: parseInt(this.cajaSerie.current.value)
        }

        this.service.crearPersonaje(personaje).then((result) => {
            this.setState({
                status: true
            })
        })
    }


    cargarSeries = () => {
        this.service.cargarSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarSeries();
    }
    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Crear Personaje</h1>
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Introduce un nombre para el personaje:
                            </label>
                            <input
                                type="text"
                                ref={this.cajaNombre}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                placeholder="Ej. Walter White"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Introduce la URL de la imagen del personaje:
                            </label>
                            <input
                                type="text"
                                ref={this.cajaImagen}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                placeholder="https://..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Selecciona una serie:
                            </label>
                            <select
                                ref={this.cajaSerie}
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

                        <button
                            onClick={this.insertarPersonaje}
                            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Crear Personaje
                        </button>
                    </form>
                </div>
            )
        }
    }
}