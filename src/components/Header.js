import React from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line max-len
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//Header Using Class Component
/*class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        const { textStyle, viewStyle } = styles;
        return (
        <View style={viewStyle}>
            <Text style={textStyle}>{this.props.headerText}</Text>
        </View>
        );
    } 
}*/


const styles = {
    viewStyle: {
        //flex: 1,
       // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        //backgroundColor: 'blue',
        height: hp(9),
        //borderWidth: hp(0.2),
        // borderRadius: hp(0.5),
        shadowColor: '#000',
        shadowOffset: { width: wp(0), height: hp(5) },
        shadowOpacity: 1,
        elevation: 4,
        posotion: 'relative',
    },
    textStyle: {
        fontSize: hp(5),
        color: 'black',
    },
     
};

export default Header;
