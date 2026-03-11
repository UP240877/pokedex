//Los corchetes del nombre del archivo es para indicar que puede ser cualquie cosa (haciendo referencia al nombre; cualquier nombre)

import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams(); //param es lo que aparce en la barra del buscador
  //con useLocal... lo que se hace es sacar un parametro de nuestra informacion. En este caso fue del atributo "name"
  //en la parte del Text se le determina de que atributo sera el parametro a regresar

  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    //params.name
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

      const response = await fetch(URL);
      const data = await response.json();

      setPokemonData(data);
    } catch (error) {
      console.log("Ocurrió un error");
    }
  };

  return (
    <View>
      <Text>{params.name}</Text>
      <Text>{JSON.stringify(pokemonData)}</Text>
    </View>
  );
}
