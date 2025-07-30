import { IModule } from "@core/lib/module";
import { storePlugins } from "@store/lib/plugin/slots";
import { subscriptionOnlyToggle } from "./lib/plugins/productEditor";
import { subscribeButton } from "./lib/plugins/subscribeButton";

export const module:IModule = {
    name: "subscription-products-plugin",
};

// -- Register plugins -- //

// Adds a button to the product editor that allows toggling the subscription-only status of a product.
storePlugins.product.editor.details.register(900, subscriptionOnlyToggle);

// Adds an add to cart button overrides for subscription products.
storePlugins.cart.addButton.register(subscribeButton);
