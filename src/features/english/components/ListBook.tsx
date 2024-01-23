import { ActionIcon, List, UnstyledButton } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

import { useQueryBook } from "@/features/english/hooks/useQueryBook";
import ItemBook from "@/features/english/components/ItemBook";

const ListBook = () => {

    const { books, isLoading, error, handleShowEdit, handleDelete } = useQueryBook();

    if (isLoading) return 'Loading...';
    if (error instanceof Error) return `An error occurred ${error.message}`;  

    const rows = books?.map((e) => (
        <List.Item style={classes.itemStyle} key={e.id}>
            <ActionIcon mr="sm" onClick={() => handleDelete(e.id)} variant='outline' color="red">
                <IconTrash />
            </ActionIcon>
            <ActionIcon mr="sm" onClick={() => handleShowEdit(e)}>
                <IconPencil />
            </ActionIcon>
            <UnstyledButton onClick={() => {}}>{e.id === 'bookId' ? (<b>{e.title}</b>) : (<>{e.title}</>)}</UnstyledButton>
        </List.Item>
    ));

    return (  
        <List spacing="xs">
            {rows}
            <List.Item style={classes.itemStyle}>
                <ItemBook />
            </List.Item>
        </List>
    );
}

const classes = {
    itemStyle: {listStyleType: 'none'}
}
 
export default ListBook;