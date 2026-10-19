import React, { Component } from 'react'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="max-w-lg mx-auto my-12 p-8 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6" style={{ margin: '2%' }}>Bienvenido!</h1>
                <img
                    src="https://i.blogs.es/9f26b7/netflix/1366_2000.jpeg"
                    style={{ width: '250px', height: '250px' }}
                    className="object-cover rounded-xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105"
                />
            </div>
        )
    }
}