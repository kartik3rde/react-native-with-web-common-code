import React from 'react';
import { View, Text } from 'react-native';
import Box from "./components/Box/box.native"
import Typography from "./components/Typography/Typography.native"
const App = ()=> {
    return (
        <View>
            <Box bgColor="info" padding={10}>
                <Typography text="Hello world in shared code" textColor="dark" type="p" size={12}/>
            </Box>
            <Box bgColor="success" padding={10}>
                <Typography text="Hello world in shared code" textColor="dark" type="h6"/>
            </Box>
            <Box bgColor="danger" padding={10}>
                <Typography text="Hello world in shared code" textColor="dark" type="h5"/>
            </Box>
            <Box bgColor="light" padding={10}>
                <Typography text="Hello world in shared code" textColor="dark" type="h4"/>
            </Box>
            <Box bgColor="dark" padding={10}>
                <Typography text="Hello world in shared code" textColor="success" type="h3"/>
            </Box>
            <Box bgColor="warning" padding={10}>
                <Typography text="Hello world in shared code" textColor="danger" type="h2"/>
            </Box>
            <Box bgColor="primary" padding={10}>
                <Typography text="Hello world in shared code" textColor="danger" type="h1"/>
            </Box>
       </View>
    )
}

export default App;
