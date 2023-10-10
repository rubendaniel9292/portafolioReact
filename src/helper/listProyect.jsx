import React from 'react';
import { dataProyect } from '../data/dataProyect';
import { Link } from 'react-router-dom';

const Listadoproyect = ({limit}) => {
    return (

        
        <div className='page'>
            <section className='works'>
                {
                    dataProyect.slice(0, limit).map(proyect => {
                        return (
                        
                            <article key={proyect.id} className='workitem'>
                                <h2>{proyect.id}</h2>
                                <div className='mask'>
                                    <img src={'/public/images/' + proyect.id + '.png'} alt={proyect.id}></img>
                                </div>
                                <span>{proyect.categoria}</span><br />
                                <h2><Link to={'/proyecto/' + proyect.id}>{proyect.nombre}</Link></h2>
                                <h3>{proyect.tegnologias}</h3>
                            </article>
                        );
                    })
                }

            </section>
        </div>
    )
}

export default Listadoproyect;
