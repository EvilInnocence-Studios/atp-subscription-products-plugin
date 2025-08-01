import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storePlugins } from "@store/lib/plugin/slots";

const regColumn = storePlugins.product.manager.columns.registerColumn;
const regColumnSet = storePlugins.product.manager.columns.registerColumnSet;

export const registerProductManagerColumnPlugins = () => {
    regColumn({
        key: "subscription",
        column: () => ({
            title: "Subscription Only",
            dataIndex: "subscriptionOnly",
            key: "subscriptionOnly",
            render: (enabled:boolean) => <div style={{textAlign: "center"}}>
                {enabled && <FontAwesomeIcon icon={faCheck} style={{color: "green"}} />}
                {!enabled && <FontAwesomeIcon icon={faClose} style={{color: "red"}} />}
            </div>,
        }),
    });
    regColumnSet("Info", [
        {priority: 300, key: "subscription"},
    ]);    
}