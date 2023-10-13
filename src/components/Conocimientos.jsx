import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3 , faBootstrap, faGitAlt, faJs, faReact, faSass,faFigma,faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faT } from '@fortawesome/free-solid-svg-icons';

const Conocimientos = () => {
    return (
        <>
            <section id="conocimientos" class="conocimientos section">
                <div class="container-fluid">
                    <div class="row text-center">
                        <div class="col-12">
                            <h2 class="h2 fw-bold mt-4">MIS CONOCIMINTOS</h2>
                        </div>
                    </div>
                    <div class="row text-center mt-4">
                        <h3 class="h3 fw-bold text-white mt-2">Tecnologías y herramientas de desarrollo:</h3>
                        <div class="col-12 col-sm-4">
                            <p class="text-white">Desarrollo front-end</p>
                            <p><FontAwesomeIcon icon={faJs} size='xl' className='text-white' flip /></p>
                            <p className="text-white">JavaScript</p>

                            <p><FontAwesomeIcon icon={faT} size='xl' className='text-white' flip /></p>
                            <p className="text-white">TypeScritp</p>
                            <p><FontAwesomeIcon icon={faReact} size='xl' className='text-white' flip /></p>
                            <p className="text-white">React</p>

                        </div>
                        <div class="col-12 col-sm-4">
                            <p class="text-white">Diseño y maquetación web</p>
                            <p><FontAwesomeIcon icon={faSass} size='xl' flip className='text-white' /></p>
                            <p className="text-white">Bootstrap</p>
                            <p><FontAwesomeIcon icon={faCss3} size='xl' flip className='text-white' /></p>
                            <p className="text-white">CSS3</p>
                            <p><FontAwesomeIcon icon={faBootstrap} size='xl' flip className='text-white' /></p>
                            <p className="text-white">Bootstrap</p>


                        </div>
                        <div class="col-12 col-sm-4">
                            <p class="text-white">Complementario/otros:</p>
                            <p><FontAwesomeIcon icon={faFigma} flip size='xl' className='text-white' /></p>

                            <p class="text-white mx-1">Diseño UX/UI básico con Figma</p>

                            <p className='text-white'><FontAwesomeIcon icon={faGitAlt} size='xl' flip /></p>
                            <p class="text-white mx-1">GIT y GitHub</p>
                            <p> <FontAwesomeIcon icon={faSquareGithub} size='xl'className='text-white' flip/></p>
                           
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Conocimientos;
