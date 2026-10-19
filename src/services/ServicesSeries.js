import axios from "axios";
import Global from "../Global";

export default class ServicesSeries {
    cargarSeries() {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "/api/series";

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    cargarSerieID(idSerie) {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "/api/series/" + idSerie;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    crearPersonaje(personaje) {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "api/personajes";

            axios.post(url + request, personaje).then((response) => {
                resolve(response);
            })
        })
    }

    cargarPersonajes() {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "api/personajes";

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    cargarPersonajeId(idPersonaje) {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "api/personajes/" + idPersonaje;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    cargarSerieId(idSerie) {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "api/series/" + idSerie;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    cargarPersonajesSerie(idSerie) {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "api/series/personajesserie/" + idSerie;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    updatePersonaje(idPersonaje, idSerie, personaje) {
        return new Promise(function (resolve) {
            let url = Global.urlApiSeries;
            let request = "api/personajes/" + idPersonaje + "/" + idSerie;

            axios.put(url + request, personaje).then((response) => {
                resolve(response);
            })
        })
    }

}