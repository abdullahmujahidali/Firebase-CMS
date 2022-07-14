import { buildSchema, useSideEntityController } from "@camberi/firecms";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const room1Schema = buildSchema({
  name: "Room number one",
  properties: {
    title: {
      title: "Title",
      dataType: "string",
    },
    description: {
      title: "Description",
      dataType: "string",
    },
  },
});

export default function RoomsViewForController() {
  const sideEntityController = useSideEntityController();

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth="400px"
        mt={4}
        mx="auto"
      >
        <Box mb={2}>
          Works seamlessly only because navigation in {"<CMSApp />"} has rooms
          entity collection.
        </Box>
        <Button
          onClick={() =>
            sideEntityController.open({
              entityId: "room1",
              collectionPath: "/rooms",
              editEnabled: false,
              schema: room1Schema,
            })
          }
          color="primary"
          variant="contained"
          size="large"
        >
          Open doc /rooms/room1
        </Button>
      </Box>
    </Container>
  );
}
