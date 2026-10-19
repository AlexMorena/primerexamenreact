import React, { Component } from 'react'
import ServicesSeries from '../services/ServicesSeries'
import { NavLink } from 'react-router-dom';

export default class SeriesComponent extends Component {
    service = new ServicesSeries();
    state = {
        serie: []
    }

    cargarSerieID(idSerie){
        this.service.cargarSerieID(idSerie).then((result) => {
            this.setState({
                serie: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarSerieID(this.props.idSerie);
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idSerie !== this.props.idSerie) {
            this.cargarSerieID(this.props.idSerie);
        }
    }

  render() {
    return (
      <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
        <h1 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 self-start">Nombre</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 self-start">{this.state.serie.nombre}</h2>
        
        <h1 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 self-start">Descripcion</h1>
        <h2 className="text-sm text-gray-600 mb-6 leading-relaxed self-start">{this.state.serie.descripcion}</h2>
        
        <h1 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 self-start">Imagen</h1>
        <img 
            src={this.state.serie.imagen} 
            style={{ width: '250px', height: '250px' }} 
            className="object-cover rounded-lg shadow-sm border border-gray-200 mb-6"
        />
        
        <div className="w-full grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                <h1 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Puntuacion</h1>
                <h2 className="text-xl font-bold text-blue-600">{this.state.serie.puntuacion}</h2>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                <h1 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Año</h1>
                <h2 className="text-xl font-bold text-gray-700">{this.state.serie.año}</h2>
            </div>
        </div>
        
        <br></br>
        <NavLink 
            to={"/personajes/" + this.props.idSerie}
            className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            Personajes
        </NavLink>
      </div>
    )
  }
}