import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import SalesList from './SalesList';

export default ({homeData}) => {
    const [index, setIndex] = useState(0);
    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: '#2e7d32',
                    height: 3,
                }}
                variant="primary"
                style={style.tab}
            >
                <Tab.Item
                    title='Últimas vendas'
                    titleStyle={style.tabTitle}
                    containerStyle={style.tabTitleBackground}
                />
                <Tab.Item
                    title="Vendas pelo PIX"
                    titleStyle={style.tabTitle}
                    containerStyle={style.tabTitleBackground}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={ style.tabItem}>
                    <SalesList homeData={homeData}/>
                </TabView.Item>
                <TabView.Item style={ style.tabItem}>
                    <Text h1>Vendas pelo pix</Text>
                </TabView.Item>
            </TabView>
        </>
    );
};

const style = StyleSheet.create({
    tab: {
        flexGrow: 1,
    },
    tabTitle: {
        fontSize: 12,
        color: '#2e7d32'
    },
    tabTitleBackground: {
        backgroundColor: '#eeeeee'
    },
    tabItem: {
        width: '100%'
    }

})