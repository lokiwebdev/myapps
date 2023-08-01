import React from 'react';
import { Link } from 'react-router-dom';
import imgTodo from "../assets/todo_list.jpg"
import imgContact from "../assets/contacts.jpg"
import imgCalculator from "../assets/calculator.jpg"
import img from "../assets/webdev.jpg"

const Projects = () => {
    return (
        <div className='justify-content-center'>


            {/* <h1 className="text-center text-success text-capitalize my-5"> our services</h1> */}
            <h1 className="mb-4 text-success colump"><b> My Projects </b></h1>

            <div className="container col-md-12 my-5">
                <div className="row">

                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-primary" >
                            <img src={imgTodo} className="mx-auto proImg" alt="Todo..." />
                            <div className="card-body">
                                <h3 className="card-title ">Todo List</h3>
                                {/* <p className="card-text h4"> LokeshApp offers a powerful ToDo List App </p> */}
                                <Link to="/todo" className="btn ">Check Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-secondary" >
                            <img src={imgTodo} className="mx-auto proImg" alt="Todo..." />
                            <div className="card-body">
                                <h3 className="card-title ">Todo Firebase</h3>
                                {/* <p className="card-text h4"> LokeshApp offers a powerful ToDo List App </p> */}
                                <Link to="/todofb" className="btn ">Check Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-success" >
                            <img src={imgContact} className="mx-auto proImg" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Contact App</h3>
                                {/* <p className="card-text h4">Some quick example of projects</p> */}
                                <Link to="/contactApp" className="btn ">Check Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-danger" >
                            {/* <img style={{height:200, width:200, margin:5}} src="https://picsum.photos/201" className="card-img-top" alt="..." /> */}
                            <img src={imgCalculator} className="mx-auto proImg" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Calculater</h3>
                                {/* <p className="card-text h4">Some quick example of projects</p> */}
                                <Link to="/calculator" className="btn">Check Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-warning" >
                            <img src={require('../assets/clock.png')} className="mx-auto proImg " alt="..." />
                            <div className="card-body">
                                <h3 className="card-title"> Clock</h3>
                                {/* <p className="card-text h4">Some quick example of projects</p> */}
                                <Link to="/clock" className="btn">Check Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-info" >
                            <img src={img} className="mx-auto proImg" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title"> Cart</h3>
                                {/* <p className="card-text h4">Some quick example of projects</p> */}
                                <Link to="/cart" className="btn">Check Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div className="card text-white bg-transparent border-dark" >
                            <img src={img} className="mx-auto proImg" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title"> Abc</h3>
                                <Link to="/cart" className="btn">Check Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Projects;
