import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { createContext } from "react";

export const Page = (props) => {
    console.log("PROPS:", props);
 

    

   return ( <div>
    <MainMenu items={props.mainMenuItems} 
    callToActionLabel={props.callToActionLabel}
    callToActionDestination={props.callToActionDestination}  />
    <BlockRenderer blocks={props.blocks} propertyFeaturesProps={ props.propertyFeatures}/>
</div>);
}