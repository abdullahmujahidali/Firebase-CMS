import {
  buildSchema,
  EntityCollection,
  EntityCollectionTable,
} from "@camberi/firecms";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const roomSchema = buildSchema({
  name: "Room",
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

const roomsCollectionEntity: EntityCollection = {
  name: "Rooms",
  schema: roomSchema,
  relativePath: "/",
};

const RoomsViewCollectionTable = () => {
  return (
    <Container>
      <Box my={2}>
        Below is the result of rendering {"<EntityCollectionTable />"}. Works
        seamlessly. Clicking on ADD ROOM or Edit room in table row does not
        throw an error only because navigation in {"<CMSApp />"} has rooms
        entity collection.
      </Box>

      <Box height="500px">
        <EntityCollectionTable
          collectionConfig={roomsCollectionEntity}
          collectionPath="rooms"
        />
      </Box>
    </Container>
  );
};

export default RoomsViewCollectionTable;
