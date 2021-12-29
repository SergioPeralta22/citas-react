import { useState, useEffect } from "react"
import Error from "./Error"



const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState(' ')
    const [propietario, setPropietario] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [date, setDate] = useState(" ")
    const [sintomas, setSintomas] = useState(" ")

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setDate(paciente.date)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])






    //? codigo para generar id aleatorias muy bueno
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //validacion del formulario

        if ([nombre, propietario, email, date, sintomas].includes(" ")) {
            console.log("Hay al menos un campo vacio")
            setError(true)
            return;
        }
        setError(false)

        //objeto de paciente
        const objetoPacientes = {
            nombre,
            propietario,
            email,
            date,
            sintomas,
        }

        //
        if (paciente.id) {
            //!Editanto el registro
            objetoPacientes.id = paciente.id;//? aqui se le asigna al objeto el id que se genero en el else.
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})



        } else {

            //!Nuevo registro de paciente
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes]);
        }




        //console.log(objetoPacientes)
        //setPacientes([...pacientes, objetoPacientes])
        //? reiniciar el formulario

        setNombre(" ");
        setPropietario(" ");
        setEmail(" ");
        setDate(" ");
        setSintomas(" ");


    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {" "}
                <span className="text-indigo-600 font-bold text-lg">Administralos.</span></p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-lg py-10 px-5 mb-20">
                {error && <Error mensaje="Todos los campos son obligatorios." />}
                <div className="mb-5" >
                    <label htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold ml-4 mb">
                        Nombre Mascota
                    </label>
                    <input id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded-lg"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold ml-4">
                        Nombre Propietario
                    </label>
                    <input id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded-lg"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email"
                        className="block text-gray-700 uppercase font-bold ml-4">
                        Email
                    </label>
                    <input id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date"
                        className="block text-gray-700 uppercase font-bold ml-4">
                        Alta del Paciente
                    </label>
                    <input id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded-lg"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold ml-4">
                        SIntomas
                    </label>
                    <textarea name="" id="sintomas" cols="30" rows="5"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded-lg"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}></textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-4 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? "Editar Paciente" : "Agregar paciente"} />
            </form>
        </div>
    )
}

export default Formulario

