import React from "react";
import { Icon } from "../styles/NotesStyles";

const OnIcon = ({darkThemeActive}: {darkThemeActive: boolean}) => {
  return (
    <Icon darkThemeActive={darkThemeActive} className={"onIcon"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="23.65" height="15.766" viewBox="0 0 23.65 15.766"><path d="M23.649,71.883a7.883,7.883,0,0,1-7.883,7.883H7.883A7.883,7.883,0,1,1,7.883,64h7.883a7.883,7.883,0,0,1,7.883,7.883Zm-7.883-5.255a5.253,5.253,0,1,0,3.717,1.538,5.255,5.255,0,0,0-3.717-1.538" transform="translate(0 -63.999)" /></svg>
    </Icon>
  )
}

export default OnIcon;