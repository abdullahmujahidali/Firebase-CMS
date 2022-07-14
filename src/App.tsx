import {
  AdditionalView,
  buildSchema,
  CMSApp,
  EntityCollection,
} from "@camberi/firecms";
import RoomsViewForController from "./RoomsViewForController";
import RoomsViewCollectionTable from "./RoomsViewCollectionTable";
import { firebaseConfig } from "./firebase-cfg";

const handbookSchema = buildSchema({
  name: "HandBook",
  properties: {
    title: {
      title: "Title",
      dataType: "string",
    },
    description: {
      title: "Description",
      dataType: "string",
    }
  },
});

const navigation: EntityCollection[] = [
  {
    schema: handbookSchema,
    name: "Handbook",
    relativePath: "rooms",
  },
];

const additionalViews: AdditionalView[] = [

  {
    path: "rv1",
    name: "rooms controller",
    group: "Room views",
    view: <RoomsViewForController />,
  },
  {
    path: "rv2",
    name: "rooms collection table",
    group: "Room views",
    view: <RoomsViewCollectionTable />,
  },
];

function App() {
  return (
    <CMSApp
      name="Rocket jump"
      logo="https://i0.wp.com/www.blakefren.ch/wp-content/uploads/2019/01/rocket-logo-transparent-red.png?fit=1564%2C1564"
      signInOptions={[]}
      authentication={() => true}
      allowSkipLogin
      navigation={navigation}
      firebaseConfig={firebaseConfig}
      additionalViews={additionalViews}
    />
  );
}

export default App;
