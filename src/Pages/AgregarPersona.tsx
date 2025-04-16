export const AgregarPersona = () => {
    return (
        <>
            <div>
                <h2>Pagina para editar Persona</h2>
                <form>
                    <h3>Nombre</h3>
                    <input type="Nombre" />
                    <h3>Apellido</h3>
                    <input type="Apellido" />
                    <h3>DNI</h3>
                    <input type="DNI" />
                    <h3>Fecha de Nacimiento</h3>
                    <input type="Fecha de nacimiento" />
                    <h3>Genero</h3>
                    <input list="genero" type="text" />
                    <datalist id="genero">
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino"></option>
                        <option value="No Binario"></option>
                    </datalist>
                </form>
            </div>
        </>
    );
};
