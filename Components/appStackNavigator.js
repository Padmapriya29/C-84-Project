import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import BookDonateScreen from "../Screens/bookDonateScreen";
import RecieverDetailsScreen from "../Screens/exchangerDetailsScreen";
import ExchangeScreen from "../Screens/exchangeScreen";
import MyExchangesScreen from "../Screens/myExchangesScreen";

export const AppStackNavigator = createStackNavigator(
  {
    ExchangeScreen: {
      screen: ExchangesScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    RecieverDetails: {
      screen: RecieverDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Exchange List",
  }
);
