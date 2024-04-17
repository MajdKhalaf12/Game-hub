import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import SearchInput from "./SearchInput";
import MobileDrawer from "./MobileDrawer";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSearch: (searchText: string) => void;
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}
const MobileNavbar = ({ onSearch, selectedGenre, onSelectedGenre }: Props) => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} boxSize="50px"></Image>
      <SearchInput onSearch={onSearch} />
      <MobileDrawer
        selectedGenre={selectedGenre}
        onSelectedGenre={onSelectedGenre}
      />
    </HStack>
  );
};

export default MobileNavbar;
