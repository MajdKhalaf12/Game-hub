import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

function MobileDrawer({ selectedGenre, onSelectedGenre }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant="outline"
        aria-label="Open"
        icon={<RxHamburgerMenu />}
        colorScheme="Dark"
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>

          <DrawerBody>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={onSelectedGenre}
            />
          </DrawerBody>

          <DrawerFooter>
            <ColorModeSwitch />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
