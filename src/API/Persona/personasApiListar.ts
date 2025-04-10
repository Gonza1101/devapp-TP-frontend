import { PersonasApi } from "./personaApi"

export const listarPersona = async () => {
    const response = await PersonasApi.get('');
    
}