import React from 'react';
import { Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductList from './ProductList'; // importação corrigida, pois está na mesma pasta

const Tab = createMaterialTopTabNavigator();

export default function ProductScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" onPress={() => navigation.replace('Login')} />
      ),
    });
  }, [navigation]);

  return (
    <Tab.Navigator>
      {/* Masculino */}
      <Tab.Screen name="Mens Shirts">
        {() => <ProductList category="mens-shirts" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Mens Watches">
        {() => <ProductList category="mens-watches" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Mens Shoes">
        {() => <ProductList category="mens-shoes" navigation={navigation} />}
      </Tab.Screen>

      {/* Feminino */}
      <Tab.Screen name="Womens Bags">
        {() => <ProductList category="womens-bags" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Womens Dresses">
        {() => <ProductList category="womens-dresses" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Womens Jewellery">
        {() => <ProductList category="womens-jewellery" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Womens Shoes">
        {() => <ProductList category="womens-shoes" navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Womens Watches">
        {() => <ProductList category="womens-watches" navigation={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
