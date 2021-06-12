import {AppRegistry, Platform} from "react-native";
import App from "./src/App";

AppRegistry.registerComponent("personalWebsite", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("personalWebsite", {
    rootTag: document.getElementById("root"),
  });
}
