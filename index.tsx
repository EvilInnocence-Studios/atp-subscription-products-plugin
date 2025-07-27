import { IModule } from "@core/lib/module";
import { plugins as storePlugins } from "@store/lib/plugin/slots";
import { subscriptionOnlyToggle } from "./lib/plugins/productEditor";

export const module:IModule = {
    name: "subscription-products-plugin",
};

// Register plugins
storePlugins.product.editor.details.register(100, subscriptionOnlyToggle);
