import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	let [listaDeTareas, setListaDeTareas] = useState([])
	const [nuevaTarea, setNuevaTarea] = useState("")

	return (
		<div className="container mt-5 w-50 text-center">
			<div className= "card">
			<h1 className="text-center mt-3 text-secondary">To-Do's</h1>
			<div className="mx-auto col-2" />
			<input type="text" className="form-control" placeholder autoFocus="¿Qué necesitas hacer?"
				value={nuevaTarea} onChange={(evento) => {
					setNuevaTarea(evento.target.value)

				}} 
			onKeyUp = {(evento)=> {
				if (evento.key == "Enter" ){
					setListaDeTareas ([...listaDeTareas, nuevaTarea]);
					setNuevaTarea ("")
				}
				console.log (evento.key)
			}}	
			/>
			<ul className="list-group list-group-flush p-2 d-flex justify-content-center align-items-center">
				{listaDeTareas.map((item, index) => {
					return (
						<li key={index} className= "list-group-item-sp w-25 rounded-pill bg-light text-center">
							{item}	<i onClick= {()=> {
								const aux = listaDeTareas.filter((_task, ind)=>{
									return (ind != index)
								})
								setListaDeTareas (aux)
							}} 
						className="fa-solid fa-trash icono-oculto"></i></li>
					)
				})}



			</ul>
				<span className= "text-primary">
					{(listaDeTareas.length==0)? "No hay tareas, agregar una ":`Tienes ${listaDeTareas.length} tarea(s) pendiente(s)` }
				</span>
			{/* <span>
				{listaDeTareas.length} items left 
			</span>  */}
			</div>
		</div>
	);
};

export default Home;
