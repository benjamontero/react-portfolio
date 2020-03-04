import React, { Component, Fragment } from 'react';

export default class Skill extends Component {
    getStringLevel(level) {
        return level === 1 ? "principiante" : level === 2 ? "intermedio" : "avanzado";
    }

    render() {
        const { name, level, photo } = this.props.info;
        const stringLevel = this.getStringLevel(level);

        return (

            <div className="max-w-md mx-auto flex p-5 bg-white rounded-lg mt-2">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12" src={photo}></img>
                </div>
                <div className="ml-6 pt-1">
                    <h4 className="text-xl text-gray-900 leading-tight">{name}</h4>
                    <p className="text-base text-gray-600 leading-normal">{stringLevel}</p>
                </div>
            </div>


        );
    }
}