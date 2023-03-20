import { FunctionComponent } from "react";
import DestinationContainer from "../../section/DestinationContainer";
import DestinationSearch from "../../section/DestinationSearch";

export interface IDestination {}

const DestinationPage: FunctionComponent<IDestination> = () => {
  return (
    <div>
      <title>Destination | On Trip</title>
      <DestinationContainer />
      <DestinationSearch />
    </div>
  );
};
export default DestinationPage;
