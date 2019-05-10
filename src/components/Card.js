import React from 'react';
import { View, StyleSheet } from 'react-native';
// eslint-disable-next-line max-len
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: wp(0.5),
        borderRadius: wp(0.5),
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: { width: wp(0), height: hp(5) },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,

        marginRight: wp(2),
        marginLeft: wp(2),
        marginTop: hp(1.5),
        
    }
});

export default Card;
