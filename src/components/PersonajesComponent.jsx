import React, { Component } from 'react'
import ServicesSeries from '../services/ServicesSeries';
import { NavLink } from 'react-router-dom';

export default class PersonajesComponent extends Component {
    service = new ServicesSeries();

    state = {
        personajes: []
    }

    cargarPersonajesID(idSerie) {
        this.service.cargarPersonajesSerie(idSerie).then((result) => {
            this.setState({
                personajes: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarPersonajesID(this.props.idSerie);
    }

    render() {
        return (
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
                <div className="w-full overflow-x-auto rounded-lg border border-gray-200 mb-6">
                    <table className="min-w-full divide-y divide-gray-200 text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Personaje</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Imagen</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {

                                this.state.personajes.map((per, index) => {
                                    return (

                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{per.nombre}</td>
                                            <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                                                <img
                                                    src={per.imagen}
                                                    alt={per.nombre}
                                                    style={{ width: '100px', height: '100px' }}
                                                    className="object-cover rounded-lg shadow-sm border border-gray-200"
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <NavLink
                    to={"/series/" + this.props.idSerie}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium text-sm rounded-lg shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Volver a la serie
                </NavLink>
            </div>
        )
    }
}