import React from 'react'
import { Section1, Section2, Section3} from '../Styled-Component/SectionStyle'
import imagen from '../assets/img/img1.webp'
import avion from '../assets/img/avion.webp'
import ciudad from '../assets/img/Ciudad.webp'
const Section = () => {
  return (
    <>
    <Section1 id="/">
        <div>
            <h2>El Conocimiento es poder</h2>
            <p>Me apasionate, no solo es tener el talento</p>
        </div>
        <img src={imagen} alt="" />
    </Section1>

    <Section2 id ="About">
        <img src={avion} alt="" />
        <div>
            <h2>La curiosidad mato al gato...</h2>
            <p></p>
        </div>
    </Section2>

    <Section3 id ="Contact">
        <img src={ciudad} alt=""/>
        <div>
            <h2>El mundo esta en tu manos</h2>
            <p>No te detengas</p>
        </div>
    </Section3>
    </>
  )
}

export default Section