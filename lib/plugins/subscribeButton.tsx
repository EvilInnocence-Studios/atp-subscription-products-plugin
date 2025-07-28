import { IRendererOptionPlugin } from "@core/lib/plugins/rendererOptions";
import { IAddToCartPluginProps } from "@store/lib/plugin/slots";
import { SubscribeButton } from "@subscription/components/SubscribeButton";
import { usePermissions } from "@uac/lib/permission/usePermissions";

export const subscribeButton:IRendererOptionPlugin<IAddToCartPluginProps> = {
    filter: ({ product }) => product.subscriptionOnly,
    plugin: () => {
        const {hasPermission} = usePermissions();
        return hasPermission("product.subscription") ? null : <SubscribeButton />
    },
}