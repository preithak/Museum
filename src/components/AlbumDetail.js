/* eslint-disable max-len */
import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ item }) => {
    const { title, artist, thumbnail_image, image, url } = item;
    const { 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        headerContentStyle, 
        headerTextStyle, 
        mainImageStyle 
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={mainImageStyle} 
                    source={{ uri: image }}
                    //resizeMode="cover"
                />
            </CardSection>

            <CardSection>
                <Button buttonPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};
const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5,
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        width: wp(15),
        height: hp(8.5),
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: wp(1),
        marginRight: wp(3)
    },
    mainImageStyle: {
        flex: 1,
        width: null,
        height: 300,
    },
});

export default AlbumDetail;
