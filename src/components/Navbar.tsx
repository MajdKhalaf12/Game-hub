import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} boxSize="70px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
