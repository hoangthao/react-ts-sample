import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Prop } from "@/common/model/types";
import { Book } from "@/features/english/model/types";

export type EnglishContextType = {
    showBook: boolean,
    editBook: Book,
    setShowBook: Dispatch<SetStateAction<boolean>>,
    setEditBook: Dispatch<SetStateAction<Book>>,
    resetEditBook: () => void
}

export const EnglishContext = createContext<EnglishContextType | null>(null)

const EnglishProvider = ({children}: Prop) => {

    const [ showBook, setShowBook ] = useState(false)
    const [ editBook, setEditBook ] = useState<Book>({
        id: undefined, title: ''
    })

    const resetEditBook = () => {
        setEditBook({ id: undefined, title: ''})
    }

    return (
        <EnglishContext.Provider value={{showBook, editBook, setShowBook, setEditBook, resetEditBook}}>
            {children}
        </EnglishContext.Provider>
    );
}
 
export default EnglishProvider;