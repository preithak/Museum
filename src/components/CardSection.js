import React from 'react';
import { View, StyleSheet } from 'react-native';
// eslint-disable-next-line max-len
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CardSection = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: wp(0.5),
        padding: hp(1.1),
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
});

export default CardSection;
