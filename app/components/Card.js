import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Apptext from './AppText'
import colors from '../config/colors';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <Apptext style={styles.title}>{title}</Apptext>
                <Apptext style={styles.subTitle}>{subTitle}</Apptext>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer:{
        padding: 20,

    },
    image:{
        width: "100%",
        height: 200,
    },
    subTitle:{
        color: colors.secondary,
        fontWeight: "bold",    
    },
    title:{
        marginBottom: 7,
    }
});

export default Card;