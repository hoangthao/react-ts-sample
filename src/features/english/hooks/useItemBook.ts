import { ChangeEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import dayjs from 'dayjs'

import { Book } from "@/features/english/model/types";
import { queryKeys } from "@/features/english/model/constants";
import { useEnglishContext } from "@/features/english/context/EnglishContext";
import { createBook, updateBook } from "@/features/english/services/BookService";

export const useItemBook = () => {
   
    const { showBook, editBook, setShowBook, setEditBook, resetEditBook } = useEnglishContext()
    
    const queryClient = useQueryClient()
    const mutation = useMutation(
        (data: Book) => editBook.id === undefined ? createBook(data) : updateBook(data),
        {
            onSuccess: () => {
                setShowBook(false)
                resetEditBook()
                queryClient.invalidateQueries(queryKeys.groups)
            }
        }
    )

    const handleSubmit = () => {
        const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
        if (editBook.id === undefined) {
            mutation.mutate({
                ...editBook,
                id: crypto.randomUUID(),
                createdAt: now,
                updatedAt: now,
            })
        } else {
            mutation.mutate({
                ...editBook,
                updatedAt: now,
            })
        }
       
    }

    const handleAdd = () => {
        setShowBook(true); 
        resetEditBook();
    }

    const handleCancel = () => setShowBook(false)

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setEditBook((val) => { return {...val, title: e.target.value} })

    return {
        showBook,
        title: editBook.title,
        handleSubmit, 
        handleAdd, 
        handleCancel, 
        handleChangeTitle
    }
}