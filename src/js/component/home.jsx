import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	let [listaDeTareas, setListaDeTareas] = useState([])
	const [nuevaTarea, setNuevaTarea] = useState("")

	useEffect(() => {
		const cargarTareas = async () => {
			const url = "https://playground.4geeks.com/todo/users/jime"
			const resp = await fetch(url)
			const data = await resp.json()
			setListaDeTareas(data.todos)
		}
		cargarTareas()
	}, [])

	return (
		<div className="container mt-5 w-50 text-center">
			<div className="card">
				<h1 className="text-center mt-3 text-secondary">To-Do's</h1>
				<div className="mx-auto col-2" />
				<input type="text" className="form-control" placeholder="¿Qué necesitas hacer?" autoFocus
					value={nuevaTarea} onChange={(evento) => {
						setNuevaTarea(evento.target.value)

					}}
					onKeyUp={(evento) => {
						if (evento.key == "Enter") {
							const url = "https://playground.4geeks.com/todo/todos/jime"
							const resp = await fetch(url,{
								method: "POST",
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify({
									label:nuevaTarea,
									is_done:false
								})
							});
							if (resp.ok){
								cargarTareas()
							}
						}
						}
				console.log(evento.key)
					}}
				/>
				<ul className="list-group list-group-flush p-2 d-flex justify-content-center align-items-center">
					{listaDeTareas.map((item, index) => {
						return (
							<li key={index} className="list-group-item-sp w-50 rounded-pill bg-light text-center">
								{item.label}
								<i onClick={() => {
									const aux = listaDeTareas.filter((_task, ind) => {
										return (ind != index)
									})
									setListaDeTareas(aux)
								}}
									className="fa-solid fa-trash icono-oculto"></i></li>
						)
					})}



				</ul>
				<span className="text-primary">
					{(listaDeTareas.length == 0) ? "No hay tareas, agregar una " : `Tienes ${listaDeTareas.length} tarea(s) pendiente(s)`}
				</span>
			</div>
		</div>
	);
};

export default Home;
