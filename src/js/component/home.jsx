import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [listaDeTareas, setListaDeTareas] = useState(["Bañarse", "Lavar los platos", "Cocinar"])
	const [nuevaTarea, setNuevaTarea] = useState("")

	return (
		<div className="container mt-5">
			<h1 className="text-center mt-5 text-secondary">To-Do's</h1>
			<div className="mx-auto col-6" />
			<input type="text" className="form-control" placeholder="¿Qué necesitas hacer?"
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
			<ul className="">
				{listaDeTareas.map((item, index) => {
					return (
						<li key={index}>
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

			<span>
				{listaDeTareas.length} items left
			</span>
		</div>
	);
};

export default Home;
