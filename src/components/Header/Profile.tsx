import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}:ProfileProps){
    return(
        <Flex
              align="center"              
            >
                {showProfileData && (
                    <Box>
                        <Text>Rafael Castanheira</Text>
                        <Text
                         color="gray.300"
                         fontSize="small"
                        >rc.castanheira190@gmail.com</Text>
                    </Box>
                )}
                <Avatar size="md" name="Rafael Castanheira" src="https://github.com/rafaelcastan.png"/>
            </Flex>
    )
}