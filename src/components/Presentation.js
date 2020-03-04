import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        const { flag, avatar, name, roll, description } = this.props;

        return (
            
            <div className="">
                {/* <img src={avatar} className="rounded-full mx-auto presentation-avatar" /> */}
                <div className=" bg-no-repeat bg-auto perfil mb-1 ">
                    <h1 className="texto-inicio ">Hola.</h1>
                    <h1 className="texto-inicio">Soy</h1>
                    <h1 className="texto-inicio">{name}</h1>
                </div>
                <div className=" content-end">
                    <h2 className="text-lg text-red-500  text-right">{roll}</h2>
                  {/* <img src={flag} className="rounded-full presentation-flag " /> */}
                </div>
                <h3 className="text-sm description">{description}</h3>
            </div>
        );
    }
}