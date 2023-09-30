import { Box, Button, Flex, Image, Input, Progress, SimpleGrid, Text } from "@chakra-ui/react"
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VendorAccountEditProfile = () => {
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
                    <Flex gap='10' w='full' alignItems={'center'} flexDirection={'column'}>
                        <Flex w='full' alignItems={'center'} flexDirection={'column'}>
                            <Image
                                borderRadius={'100%'}
                                w='150px'
                                h='150px'
                                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                            <Flex pt='3'>
                                <Button>Edit Profile Picture</Button>
                            </Flex>
                        </Flex>
                        <Flex flexDirection={'column'} gap='5' w='lg'>

                            <Box position={'relative'} >
                                <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>Business Name</Text>
                                <Input border='1px solid #00B0F3' zIndex={1} />
                            </Box>

                            <Box position={'relative'} >
                                <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>E-mail Address</Text>
                                <Input border='1px solid #00B0F3' zIndex={1} />
                            </Box>

                            <Box position={'relative'} >
                                <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>Bio</Text>
                                <Input border='1px solid #00B0F3' zIndex={1} />
                            </Box>

                            <Box position={'relative'} >
                                <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>Street Address</Text>
                                <Input border='1px solid #00B0F3' zIndex={1} />
                            </Box>
                            <SimpleGrid gap='5' columns={[1, 2]}>
                                <Box position={'relative'} >
                                    <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>Country</Text>
                                    <Input border='1px solid #00B0F3' zIndex={1} />
                                </Box>  <Box position={'relative'} >
                                    <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>State</Text>
                                    <Input border='1px solid #00B0F3' zIndex={1} />
                                </Box>  <Box position={'relative'} >
                                    <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>City</Text>
                                    <Input border='1px solid #00B0F3' zIndex={1} />
                                </Box>  <Box position={'relative'} >
                                    <Text bg='white' zIndex={100} top='-2' left={2} fontSize={'xs'} position={'absolute'}>Zip Code</Text>
                                    <Input border='1px solid #00B0F3' zIndex={1} />
                                </Box>
                            </SimpleGrid>
                            <Button mt='10' mx='40'>Update Profile</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorAccountEditProfile;