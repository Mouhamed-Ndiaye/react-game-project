import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ModeSwitch from "./ModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <ModeSwitch />
    </HStack>
  );
};

export default NavBar;
