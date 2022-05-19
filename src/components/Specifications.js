import React from 'react';
import './materialize.css'
import './index.css'

import Item7 from '../images/Capture2.PNG'
import Item8 from '../images/Capture3.PNG'
import Item9 from '../images/Capture3.PNG'
import Item10 from '../images/Capture5.PNG'


const specs = [
    {id:1, title: 'The Drive System', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu auctor risus.', img: Item7},
    {id:2, title: 'The Tonearm', desc:'Donec at neque ac eros suscipit venenatis ac in sapien.', img: Item8},
    {id:3, title: 'The Phono Cartridge', desc:'Pellentesque porttitor purus eu iaculis vehicula.', img: Item9},
    {id:4, title: 'The Turntable Base', desc:' Donec id tellus eu ante fermentum ultricies in elementum magna.', img: Item10}
]

export default function Specifications () {
    let specifics = specs.map(spec => {
        return(
            <div className='specs-cta' key={spec.id}>
                <div className='spec-image'>
                    <img alt={spec.title} src={spec.img}/>
                </div>
                <div className='spec-desc'>
                    <h6>{spec.title}</h6>
                    <p>{spec.desc}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='specs'>
            <h4 className='spec-title'>Specifications</h4>
            {specifics}
            <hr />
            <div className='main-video'>
                <iframe src='https://www.youtube.com/embed/WM-aIDwfrhc' title='Youtube video player'></iframe>
            </div>
            </div>
    )
}