import React from 'react';
import "./styles/styles.scss"
import Curso from './curso'

const cursos = [
  {
    title: 'React desde Cero',
    image: 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    price: 30,
    profesor: 'Beto Quiroga'
  },
  {
    title: 'Drupal desde cero',
    image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    price: 30,
    profesor: 'Beto Quiroga'

  },
  {
    title: 'GO desde cero',
    image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    price: 40,
    profesor: 'Alexys Lozada'
  },
  {
    title: 'HTML desde cero',
    image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    price: 10,
    profesor: 'Alvaro Felipe'
  }
]
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
      {
        cursos.map(curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
      }
    </div>
  </>
)

export default App;
