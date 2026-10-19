import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ServicesSeries from '../services/ServicesSeries';

export default class MenuComponent extends Component {
    service = new ServicesSeries();
    state = {
        series: []
    }

    cargarSeries = () => {
        this.service.cargarSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    componentDidMount() {
        this.cargarSeries();
    }
    render() {
        return (
            <div>
                <nav className="bg-slate-900 border-b border-slate-800 text-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                        <a className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors" href="#">Navbar</a>
                        <button className="md:hidden p-2 text-slate-400 hover:text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="block w-6 h-0.5 bg-current mb-1"></span>
                            <span className="block w-6 h-0.5 bg-current mb-1"></span>
                            <span className="block w-6 h-0.5 bg-current"></span>
                        </button>
                        <div className="hidden md:flex items-center space-x-4" id="navbarSupportedContent">
                            <ul className="flex items-center space-x-4">
                                <li className="list-none">
                                    <NavLink className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="list-none">
                                    <NavLink className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all" aria-current="page" to="/crearpersonaje">Crear Personaje</NavLink>
                                </li>
                                <li className="list-none">
                                    <NavLink className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all" aria-current="page" to="/updatepersonaje">Modificar Personaje</NavLink>
                                </li>
                                <li className="relative group list-none py-2">
                                    <a className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all inline-flex items-center cursor-pointer" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Series
                                    </a>
                                    <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50">
                                        <ul className="w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1">
                                            {
                                                this.state.series.map((ser, index) => {
                                                    return (
                                                        <NavLink className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white" to={"/series/" + ser.idSerie} key={index}>{ser.nombre}</NavLink>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}