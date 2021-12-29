const Error = ({ mensaje }) => {
    return (
        <div
            className="bg-red-800 uppercase text-white text-center p-3 font-bold mb-3 rounded-md">
            <p>{mensaje}</p>

        </div>
    )
}

export default Error
