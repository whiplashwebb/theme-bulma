import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/dist/examples.css";

// Two entry points for testing. Use one or the other, not both.

// import main bundle with combined theme + bulma
import "./main-combined.scss";

// import main bundle with combined theme + bulma
//import "./main-separated.scss";

// add theme config
import { bulmaConfig } from "./plugins/theme";

createApp(App)
    .use(router)
    .use(Oruga, {
        iconPack: "fas",
        customIconPacks: {
            fas: {
                sizes: {
                    default: "",
                    small: "fa-sm",
                    medium: "fa-lg",
                    large: "fa-2x",
                },
            },
        },
        ...bulmaConfig,
    })
    .use(Examples)
    .mount("#app");
