const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    //extraer las variables del arreglo

    const { nombre, propietario, email, date, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }



    return (
        <div className="m-10 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase ">Nombre:{" "}
                <span className="font-normal normal-case">{nombre}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Propietario:{" "}
                <span className="font-normal normal-case">{propietario}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Email:{" "}
                <span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Fecha de alta:{" "}
                <span className="font-normal normal-case">{date}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase ">Sintomas:{" "}
                <span className="font-normal normal-case">{sintomas}</span></p>
            <div className="flex justify-between  mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-700 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
