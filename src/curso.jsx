import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({ title, image, profesor, price }) => (
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {profesor}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="http://ed.team">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}
Curso.defaultProps = {
    title: "No se encontro el titulo",
    image: "https://sites.google.com/a/correo.unimet.edu.ve/ggrecine/_/rsrc/1474253332774/home/new-york-city-wallpaper-4.jpg?height=225&width=400",
    price: 0,
    profesor: "sin profesor"
}

export default Curso