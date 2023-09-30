import { Box, Button, Divider, Flex, Image, Input, Progress, SimpleGrid, Text } from "@chakra-ui/react"
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VendorAccountChangePassword = () => {
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
                    <Text px='5' fontSize={'20'} fontWeight={'500'}>Change Password</Text>
                    <Flex px='5' gap='5' w='full' alignItems={'center'} flexDirection={'column'}>
                        <Box w='full'>
                            <Text fontSize={'sm'}>Old Password</Text>
                            <Input bg='#E6F2F7' />
                        </Box>
                        <Divider />
                        <Box w='full'>
                            <Text fontSize={'sm'}>New Password</Text>
                            <Input bg='#E6F2F7' />
                        </Box>
                        <Box w='full'>
                            <Text fontSize={'sm'}>Confirm Password</Text>
                            <Input bg='#E6F2F7' />
                        </Box>
                        <Text w='full' fontSize={'sm'} fontWeight={'600'}>Transaction Pin</Text>
                        <Box w='full'>
                            <Text fontSize={'sm'}>Set transaction pin</Text>
                            <Input bg='#E6F2F7' />
                        </Box>
                        <Box w='full'>
                            <Text fontSize={'sm'}>Confirm transaction pin</Text>
                            <Input bg='#E6F2F7' />
                        </Box>
                        <Button mt='10'>Update Password</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorAccountChangePassword;