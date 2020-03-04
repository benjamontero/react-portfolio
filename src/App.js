import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import SkillsContainer from './components/SkillsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import avatar from './assets/avatar.png';

const flag = "https://cdn.countryflags.com/thumbs/argentina/flag-round-250.png"
const name = "Benja Montero";
const roll = "Full Stack Dev - Technical it";
const description = "Entusiasta de la Tecnologia, Actualmente trabajando como Tecnico IT en GRUPO NOVATI, desempeñando tareas de soporte tecnico para empresar de primera linea. Estudiante en Rolling Code School cursando Full Stack.";
const mySkills = [
  {
    name: "HTML",
    level: 3,
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    level: 2,
    photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/css-logo-300x300.png"
  },
  {
    name: "Javascript",
    level: 1,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
  },
  {
    name: "React",
    level: 1,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png"
  },
  {
    name: "Redes",
    level: 2,
    photo: "https://image.flaticon.com/icons/png/512/126/126344.png"
  },

  
];
 

const myProjects = [
  {
    name: "RollingBook",
    photo: "https://i.ytimg.com/vi/qL_P1pkuD3g/maxresdefault.jpg"
  },
  {
    name: "RollingMedical",
    photo: "https://www.websitesdesign.site/imagini/medicom-flat-design-doctor-website-template.jpg"
  }
]

function App() {
  return (
    <div className="App text-center">
      <header className="App-header">
        <Presentation
          avatar={avatar}
          flag={flag}
          name={name}
          roll={roll}
          description={description}
        />

      </header>
      <div>
        <SkillsContainer skills={mySkills} />
        <ProjectsContainer projects={myProjects}/>
      </div>
      <footer>BenjaMontero 2020</footer>
    </div>
  );
}

export default App;
