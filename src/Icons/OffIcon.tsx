import React from "react";
import { Icon } from "../styles/NotesStyles";

const OffIcon = ({darkThemeActive}: {darkThemeActive: boolean}) => {
  return (
    <Icon darkThemeActive={darkThemeActive} className={"offIcon"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="23.65" height="15.767" viewBox="0 0 23.65 15.767"><path d="M15.767,64H7.883a7.883,7.883,0,1,0,0,15.767h7.883a7.883,7.883,0,1,0,0-15.767ZM2.628,71.883A5.253,5.253,0,1,1,4.166,75.6a5.256,5.256,0,0,1-1.539-3.717Zm13.139,5.256H13.759a7.88,7.88,0,0,0,0-10.511h2.008a5.256,5.256,0,1,1,0,10.511Z" transform="translate(0 -63.999)" /></svg>
    </Icon>
  )
}

export default OffIcon;