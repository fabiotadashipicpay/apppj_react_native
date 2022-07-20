import React from "react";
import { StyleSheet } from "react-native";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { Avatar, ListItem } from "@rneui/themed";
import { baseURL } from "../api/BalanceAPI";

export default ({ item }) => {
    // js code
    return (
        <ListItem containerStyle={style.listItem}>
            <Avatar rounded={true} source={{ uri: `${baseURL}/${item.consumer_avatar}` }} />
            <ListItemContent style={style.listItemContent}>
                <ListItemTitle>{item.consumer}</ListItemTitle>
                <ListItemSubtitle style={style.listItemSubtitle}>Recebido por {item.received_by}</ListItemSubtitle>
                <ListItemSubtitle style={style.listItemSubtitle}>Há {daysDifference(new Date(), new Date(item.date))} dias</ListItemSubtitle>
            </ListItemContent>
            <ListItemTitle style={style.listItemAmount}>R${formatMoney(item.amount)}</ListItemTitle>
        </ListItem>
    )
}
const daysDifference = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
}
const formatMoney = (valor) => (Math.round(valor * 100) / 100).toFixed(2).replace('.', ',')

const style = StyleSheet.create({
    scrollView: {
    },
    listItem: {
        margin: 1,
        height: 70,
        flexDirection: 'row',
    },
    listItemSubtitle: {
        fontSize: 10,
        color: '#90a4ae'
    },
    listItemAmount: {
        fontSize: 14,
        color: '#2e7d32'
    }
})