import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <List key={genre.id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              fontWeight="semibold"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </List>
      ))}
    </List>
  );
};

export default GenreList;
