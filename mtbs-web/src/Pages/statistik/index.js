import React, { useState } from "react";
import { LayoutDashboard, Statistik } from "../../Containers";

const Index = (props) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <LayoutDashboard
      isOpen={isOpen}
      page={"statistik"}
      setIsOpen={setIsOpen}
      title={"Statistik"}
      userName={"Admin MTBS"}
    >
      <Statistik />
    </LayoutDashboard>
  );
};

export default Index;
