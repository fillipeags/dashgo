import { Flex, Box, Text, Avatar} from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fillipe Augusto</Text>
        <Text color="gray.300" fontSize="small" >fillipe484@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Fillipe Augusto" src="https://github.com/fillipeags.png"/>
    </Flex>
  );
}