import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
router;

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.split("/").filter(Boolean).at(-1);
  console.log(id);
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Pressable //Pressable es mas personalizabe que un View
      onPress={() => router.push("/new-screen")}
      style={({ pressed }) => [
        //Esto se pone como un arreglo para integrar multiples "styles"
        styles.pressableStyle,

        pressed && {
          //pressed = mientras este presionado
          opacity: 0.5,
        }, //Si el boton esta presionado el "opacity" lo vuelve mas oscuro
      ]}
    >
      <Image
        source={{ uri: pokemonImageUrl }}
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#b0ecd5ff",
  },
});
