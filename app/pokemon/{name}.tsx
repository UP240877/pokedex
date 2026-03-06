//Los corchetes del nombre del archivo es para indicar que puede ser cualquie cosa (haciendo referencia al nombre; cualquier nombre)

import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams(); //param es lo que aparce en la barra del buscador
  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  );
}
