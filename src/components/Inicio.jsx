import React from 'react';
import Typed from 'typed.js';

const Inicio = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['DanielRivasWeb'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>

      <section id="inicio" className="welcome section">


        <div className="container-fluid">
          <div className="row">
            <div className=" text-center text-container">
              <h1 ref={el} className="text-white fw-bold  display-1">DanielRivasWeb</h1>
            </div>
            <div class="col-12 text-center text-containerp">

              <p className="p-welcome text-white fw-bold display-6">
                Bienvenidos a mi sitio. Un espacio donde te enseño mi trabajo como diseñador y
                desarrollador web con las tecnologías más demandadas actualmente en la industria de la
                programación web.
              </p>
            </div>

          </div>
        </div>

      </section>
    </>

  )
}

export default Inicio;
