import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ buttonPress }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={buttonPress}
        >
            <Text style={textStyle}>
                Get More Info
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: wp(1.5),
        marginRight: wp(1.5),
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: hp(2.5),
        fontWeight: '600',
        paddingTop: hp(1.75),
        paddingBottom: hp(1.75)
    }
});

export default Button;
