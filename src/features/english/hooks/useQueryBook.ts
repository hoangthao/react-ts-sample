import { useMutation, useQuery, useQueryClient } from "react-query";
import { useContext } from "react";
import { modals } from "@mantine/modals";

import { Book } from "@/features/english/model/types";
import { queryKeys } from "@/features/english/model/constants";
import { EnglishContext, EnglishContextType } from "@/features/english/context/EnglishContext";
import { deleteBook, fetchBook } from "@/features/english/services/BookService";

export const useQueryBook = () => {
    const { showBook, editBook, setShowBook, setEditBook } = useContext(EnglishContext)  as EnglishContextType
    const queryClient = useQueryClient()
    const { data: books, isLoading, error } = useQuery({
        queryKey: queryKeys.groups, 
        queryFn: (): Promise<Book[]> => fetchBook()
    })

    const mutation = useMutation(
        deleteBook,
        {
            onSuccess: () => {
                setShowBook(false)
                queryClient.invalidateQueries(queryKeys.groups)
            }
        }
    )

    const handleShowEdit = (e: Book) => {
        setEditBook(e); 
        setShowBook(true)
    }

    const openDeleteModal = (id: string) =>
        modals.openConfirmModal({
            title: 'Confirmation',
            centered: true,
            children: 'Would you like to delete this book?',
            labels: { confirm: 'Yes', cancel: "No" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => mutation.mutate(id),
        });

    const handleDelete = (id: string | undefined) => {
        if (id !== undefined) {
            openDeleteModal(id)
        }
    }

    return {
        books, isLoading, error,
        showBook, editBook, handleShowEdit, handleDelete
    }
}