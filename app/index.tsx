import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}
export default function Index() {
  const [allpokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [result, setResults] = useState<Pokemon[]>([]);
  //proceso async = asincrono (puede hacer multiples procesos al mismo tiempo)
  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const respose = await fetch(URL, {
        method: "GET",
      });

      if (respose.ok) {
        console.log(respose);
        const data = await respose.json();
        setResults(data.results);
        setAllPokemons(data.results);
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

  const filterPokemons = (text: string) => {
    const arrayFiltered = allpokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase()),
    );
    setResults(arrayFiltered);
  };

  return (
    <ScrollView>
      <TextInput onChangeText={filterPokemons}></TextInput>

      {result.map((item) => {
        return (
          <PokemonCard
            key={item.name}
            name={item.name}
            url={item.url}
          ></PokemonCard>
        );
      })}
    </ScrollView>
  );
}
