import { createApp } from "nativescript-vue";
import Home from "./components/Home.vue";
import TextFieldPlugin from "@nativescript-community/ui-material-textfield/vue";

const app = createApp(Home);
app.use(TextFieldPlugin);
app.start();
