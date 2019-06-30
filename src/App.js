import React from 'react';
import "./styles/styles.scss"
import Curso from './curso'
// Solo un elemento en el retorno ()
const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="http://hdwpro.com/wp-content/uploads/2017/11/Awesome-Wallpaper.jpg" alt="imagen" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Aprendiendo
          react</p>
            <p> subtitulo en react</p>
            <a href="https://ed.team" className="button">go to react</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
)

export default App;
