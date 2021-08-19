import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile(){
    return(
        <Flex
              align="center"              
            >
                <Box>
                    <Text>Rafael Castanheira</Text>
                    <Text
                      color="gray.300"
                      fontSize="small"
                    >rc.castanheira190@gmail.com</Text>
                </Box>

                <Avatar size="md" name="Rafael Castanheira" src="https://github.com/rafaelcastan.png"/>
            </Flex>
    )
}