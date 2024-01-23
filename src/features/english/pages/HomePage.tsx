import { Grid, ScrollArea } from "@mantine/core";

import ListBook from "@/features/english/components/ListBook";
import EnglishProvider from "@/features/english/context/EnglishContext";

const HomePage = () => {
    return ( 
        <EnglishProvider>
        <Grid>
            <Grid.Col span={4}><ScrollArea h={250}><ListBook/></ScrollArea></Grid.Col>
        </Grid>
        </EnglishProvider>
     );
}
 
export default HomePage;