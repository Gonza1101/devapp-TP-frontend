export const AgregarPersona = () => {
    return (
        <>
            <div className="inicio">
                <p>Nueva Persona</p>
                <form>
                    <p>Nombre</p>
                    <input type="Nombre" />
                    <p>Apellido</p>
                    <input type="Apellido" />
                    <p>DNI</p>
                    <input type="DNI" />
                    <p>Fecha de Nacimiento</p>
                    <input type="Fecha de nacimiento" />
                    <p>Genero</p>
                    <input list="genero" type="text" />
                    <datalist id="genero">
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino"></option>
                        <option value="No Binario"></option>
                    </datalist>
                </form>
                <button className="agregarPersona">Agregar</button>
            </div>
        </>
    );
};
