import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
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
      } else {
        console.log("Bard Rquest");
      }
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  const [result, setResults] = useState<any[]>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  return (
    <ScrollView>
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
