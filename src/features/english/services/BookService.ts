import { Book } from "@/features/english/model/types";

const API_URL = 'http://localhost:3000'

export const fetchBook = async () => {
    console.log('call fetchBook')
    const response = await fetch(`${API_URL}/books`)
    return response.json();
}

export const createBook = async (data: Book) => {
    console.log('call createBook')
    const response = await fetch(`${API_URL}/books`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    return response.json();
}

export const updateBook = async (data: Book) => {
    console.log('call updateBook')
    const response = await fetch(`${API_URL}/books/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
    return response.json();
}

export const deleteBook = async (id: string) => {
    console.log('call deleteBook')
    const response = await fetch(`${API_URL}/books/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}
