import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/image.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"20px"}>
      <Image src={logo} boxSize="70px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
