import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconCheck, IconPlus, IconX } from "@tabler/icons-react";

import { usePersistBook } from "@/features/english/hooks/usePersistBook";

const ItemBook = () => {

    const {
        showBook,
        title,
        handleSubmit, 
        handleAdd, 
        handleCancel, 
        handleChangeTitle } = usePersistBook()

    
    return ( <Group>
        {   !showBook && <ActionIcon color="lime" onClick={handleAdd}>
                        <IconPlus />
                    </ActionIcon>}
        {
            showBook && <>
                <TextInput
                    value={title}
                    onChange={handleChangeTitle}/>
                <ActionIcon onClick={handleSubmit}>
                    <IconCheck/>
                </ActionIcon>
                <ActionIcon onClick={handleCancel}  color="lime">
                    <IconX />
                </ActionIcon>
            </>
        }
                    
    </Group> );
}
 
export default ItemBook;