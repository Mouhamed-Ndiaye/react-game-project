import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
