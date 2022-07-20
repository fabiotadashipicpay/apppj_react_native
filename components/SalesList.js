
import React from "react";
import { StyleSheet, FlatList } from "react-native";
import SalesCard from "./SalesCard";

export default ({homeData}) => {

    const renderItem = ({item}) => (
        <SalesCard item={item} />
    )

    return (
        <FlatList style={style.scrollView}
            data={homeData.last_sales}
            renderItem={ renderItem }
        />
    )
}

const style = StyleSheet.create({
    scrollView: {
    }
})
