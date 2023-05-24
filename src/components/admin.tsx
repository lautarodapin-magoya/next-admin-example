import {Admin, Create, Datagrid, Form, List, ListGuesser, Resource, SaveButton, TextField, TextInput} from "react-admin"
import {dataProvider} from "ra-data-simple-prisma"

const ReactAdmin = () => {
    return (
        <Admin dataProvider={dataProvider("/api")}>
            <Resource name="example"
                list={(
                    <List>
                        <Datagrid>
                            <TextField source="id" />
                            <TextField source="title" />
                        </Datagrid>
                    </List>
                )}
                create={(

                    <Create>
                        <Form>

                            <TextInput source="title" fullWidth />
                            <SaveButton />
                        </Form>
                    </Create>
                )}
            />
        </Admin>
    )
}

export default ReactAdmin