import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  //proceso async = asincrono (puede hacer multiples procesos al mismo tiempo)
  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const respose = await fetch(URL, {
        method: "GET",
      });

      if (respose.ok) {
        console.log("Request ok");
      } else {
        console.log("Bard Rquest");
      }
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
