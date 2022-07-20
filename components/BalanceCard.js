import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Card, Icon } from "@rneui/themed";

export default ({homeData}) => {
    const [isVisible, setVisible] = useState(true)

    return (
        <Card containerStyle={style.card}>
            <View style={style.balance}>
                <Text>Saldo na conta</Text>
                <Icon name={(isVisible) ? 'visibility' : 'visibility-off'} style={style.icon} onPress={_ => setVisible(!isVisible)} />
            </View>
            <Text style={style.balanceText}>{(isVisible) ? formatMoney(homeData.balance) : '             - '}</Text>
            <Text>Lançamentos futuros: R${formatMoney(homeData.future_value)}</Text>
            <Button style={style.button} title='Transferir para mim' color='#eeeeee' titleStyle={{ color: 'black' }} />
        </Card>
    )
}

const formatMoney = (valor) => (Math.round(valor * 100) / 100).toFixed(2).replace('.',',')

const style = StyleSheet.create({
    card: {
        borderRadius: 4,
        borderWidth: 0
    },
    balance: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 8
    },
    balanceText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 16
    }
})