import { Card } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ title } ) => {
    return (
        <Card containerStyle={style.card} >
            <Text style={style.novo}>NOVO</Text>
            <View style={style.iconView}>

            <Icon name='apps' />
            <Text style={style.title}>{title}</Text>
            </View>
        </Card>
    )
}

const style = StyleSheet.create({
    card: {
        width: 140,
        height: 120,
        marginHorizontal: 8,
        borderRadius: 4,
        borderWidth: 0,
        padding: 4
    },
    novo: {
        fontSize: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#2e7d32',
        padding: 2,
        color: '#fff',
        fontWeight: 'bold'
    },
    iconView: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        marginTop: 16,
        alignItems: 'flex-start',
    },
    title: {
        marginTop: 4
    }
})