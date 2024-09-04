import {
  Button,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Card,
  Text,
} from "@chakra-ui/react";

const CustomCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      my={4}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">{description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};
export default CustomCard;
