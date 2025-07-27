import { IUpdater } from "@core/lib/useUpdater";
import { IProduct } from "@store-shared/product/types";
import { Switch } from "antd";

export const subscriptionOnlyToggle = (props:IUpdater<IProduct>) =>
    <Switch
        checked={props.history.entity.subscriptionOnly}
        checkedChildren="Subscription Required"
        unCheckedChildren="No Subscription Required"
        onChange={props.updateToggle("subscriptionOnly")}
    />;
