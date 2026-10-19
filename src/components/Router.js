import { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import SeriesComponent from "./SeriesComponent";
import PersonajesComponent from "./PersonajesComponent";
import CreatePersonaje from "./CreatePersonaje";
import UpdatePersonaje from "./UpdatePersonaje";

export default class Router extends Component {
    render() {
         function SeriesElement() {
             let { idSerie } = useParams();
             return (<SeriesComponent idSerie={idSerie} />)
         }

         function PersonajesElement() {
            let { idSerie } = useParams();
            return (<PersonajesComponent idSerie={idSerie} />)
        }
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/series/:idSerie" element={<SeriesElement />} />
                    <Route path="/personajes/:idSerie" element={<PersonajesElement />} />
                    <Route path="/crearpersonaje" element={<CreatePersonaje />} />
                    <Route path="/updatepersonaje" element={<UpdatePersonaje />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
