import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { MKTextfield, MKColor, mdl} from 'react-native-material-kit';

interface Props {
	name?: string | number,
	jersey?: number
}

interface State {

}

export default class LoginApp extends Component<Props, State> {

	static defaultProps = {
		name: "John",
		jersey: "10"
	}

	render(){
		return (
			<View style= {styles.container} >
				<TextFieldEmail />
				<TextFieldPassword />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textfield: {
		height: 48,
		marginTop: 10,
		width: 250
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	} as React.ViewStyle
})


const TextFieldEmail = mdl.Textfield.textfieldWithFloatingLabel()
	.withPlaceholder('Email')
	.withPassword(false)
	.withStyle(styles.textfield)
	.withFloatingLabelFont({
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: '200',
	})
	.build();

const TextFieldPassword = mdl.Textfield.textfieldWithFloatingLabel()
	.withPlaceholder('password')
	.withPassword(true)
	.withStyle(styles.textfield)
	.withFloatingLabelFont({
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: '200',
	})
	.build();