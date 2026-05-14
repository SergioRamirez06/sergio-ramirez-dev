import { portafolioApi } from "../../api/api";
import { Contact } from "../types/contact";

export const sendContact = async (payload: Contact): Promise<void> => {

  try {

    const { data } = await portafolioApi.post<Contact>("/contacts", payload);
    console.log("Respuesta backend:", data);

  } catch (error) {
    console.error("Error enviando contacto:", error);
    throw error; 

  }
};