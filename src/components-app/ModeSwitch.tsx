import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Mode Sombre</Text>
    </HStack>
  );
};

export default ModeSwitch;
