import React from 'react';

const Contacto = () => {
    return (
        <>
            <section id="contacto" className="contacto section">
                <div className="container-fluid ">
                    <div className="row  text-center">
                        <div className="col-12">
                            <h2 className="h2 fw-bold">Si deseas trabajar conmigo, puedes contactarme aquí..</h2>

                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="text-center mb-2">
                                <p>Detalles de contacto:</p>
                                <p>+593123456</p>
                                <i className="fas fa-phone mx-2 fa-3x"></i>
                                <i className="fab fa-whatsapp-square mx-2 fa-3x"></i>
                                <i className="fab fa-telegram mx-2 fa-3x"></i>
                                <p>Mis redes</p>
                            </div>

                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="mb-2">
                                <p>Evíame un e-mail:</p>
                                <form action="">
                                    <div className="mb-3">
                                        <label for="email" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="area" className="form-label">Mensaje</label>
                                        <textarea className="form-control" id="area1" rows="2"></textarea>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary" type="button">Enviar</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div >

            </section >

        </>
    )
}

export default Contacto;
