import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import MenuCard from "./MenuCard";

export default () => {
    return (
        <ScrollView horizontal={true} style={style.scrollView}>
            <MenuCard title={`Pix`}/>
            <MenuCard title={`Pagar\nBoletos`} />
            <MenuCard title={`Open\nBanking`}/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    scrollView: {
        padding: 8,
        flexGrow: 0
    }
})