import React from "react";
import MenuButton from "../../components/firstPage/menuButton";
import * as Icons from "../../components/icons";

export default {
  title: "Elements/Button",
};

export const Buton = () => {
  return (
    <MenuButton title="Üniversiteler" bgColor="rgba(242,5,68,0.8)">
      <Icons.School width="98px" height="98px" style={{ color: "white" }} />
    </MenuButton>
  );
};
