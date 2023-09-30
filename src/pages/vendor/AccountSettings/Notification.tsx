import { Box, Button, Flex, Image, Input, Progress, SimpleGrid, Text } from "@chakra-ui/react"
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VendorAccountNotification = () => {
    const NavLink = [
        { name: "Edit Profile", to: "/vendor/account-settings/edit-profile" },
        { name: "Notification", to: "/vendor/account-settings/notification" },
        { name: "Subscription ", to: "/vendor/account-settings/subscription" },
        { name: "Change Password", to: "/vendor/account-settings/change-password" },
    ]
    return (
        <Box bg='#E1EEF3' p='20'>
            <Flex gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w='sm' h='80' bg='white'>
                    <Text px='5' py='5' fontSize={'20'} fontWeight={'500'}>Account Settings</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w='5xl'>
                    <Text px='5' fontSize={'20'} fontWeight={'500'}>Account Settings</Text>
                    <Flex px='5' flexDirection={'column'} gap={'5'}>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>

                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>
                        <Box p='2' bg='#F1F5F9'>
                            <Text>When a chat message is received </Text>
                        </Box>

                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorAccountNotification;