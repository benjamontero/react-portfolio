import React, { Component, Fragment } from 'react';
import Skill from './Skill';

export default class SkillsContainer extends Component {
    render() {
        const { skills } = this.props;

        return (
            <div>
                <h1 className="text-left ">Habilidades</h1>
                <div className="flex flex-wrap p-6 ">
                    <div className='w-screen '>
                        {skills.map(skill => <Skill info={skill} key={skill.name} />)}
                    </div>
                </div>
            </div>
        );
    }
}