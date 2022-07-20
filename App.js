import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BalanceCard from "./components/BalanceCard";
import MenuCardList from "./components/MenuCardList";
import TabMenu from "./components/TabMenu";
import { fetchHome } from './api/BalanceAPI'

export default () => {
  const [homeData, setHomeData] = useState({})

  useEffect(() => {
    fetchHome().then(data => setHomeData(data))
  }, [])

  return (
    <SafeAreaView style={style.safeArea}>
      <BalanceCard homeData={homeData} />
      <MenuCardList />
      <TabMenu homeData={homeData} />
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: '#fafafa'
  }
})