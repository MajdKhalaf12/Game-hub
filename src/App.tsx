import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Show,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";
import MobileNavbar from "./components/MobileNavbar";

export interface GameQuery {
  genre: Genre | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav   nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="nav">
            <Navbar
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </GridItem>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        {isMobile && (
          <GridItem area="nav">
            <MobileNavbar
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </GridItem>
        )}

        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <GameGrid gameQuery={gameQuery} />
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
