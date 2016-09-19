import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SideMenu from 'react-native-side-menu';

import HelloWorld from "./components/HelloWorld/index";
import LoginApp  from "./components/login/index";

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    
    render() {
        return (
            <SideMenu menu={<Text> This is new </Text>}
            >
                <View style={styles.container}>
                    <LoginApp  />
                </View>
            </SideMenu >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as React.ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as React.TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as React.TextStyle,

    helloworld: {
        marginVertical: 15,
    } as React.ViewStyle,
});
