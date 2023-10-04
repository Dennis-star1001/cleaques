import { Box, Button, Divider, Flex, Image, Input, Progress, SimpleGrid, Text } from "@chakra-ui/react"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VendorAccountSubscription = () => {
    const NavLink = [
        { name: "Edit Profile", to: "/vendor/account-settings/edit-profile" },
        { name: "Notification", to: "/vendor/account-settings/notification" },
        { name: "Subscription ", to: "/vendor/account-settings/subscription" },
        { name: "Change Password", to: "/vendor/account-settings/change-password" },
    ]
    return (
        <Box bg='#E1EEF3' p={['5','20']}>
            <Flex flexDirection={['column','row']} gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w={['auto','sm']} h='80' bg='white'>
                    <Text px='5' py='5' fontSize={'20'} fontWeight={'500'}>Account Settings</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex px='5' flexDirection={'column'} gap='5' bg='white' py='10' h='auto'  w={['auto','5xl']}>
                    <Text fontSize={'20'} fontWeight={'500'}>Subscription</Text>
                    <Text>Subscription status: Active </Text>
                    <Divider />
                    <Flex flexDirection={['column','row']} justifyContent={'space-between'}>
                        <Text>Platinum Subscription </Text>
                        <Flex  flexDirection={['column','row']}  gap='5'>
                            <Button bg='none' border='1px solid #00B0F3' color='#00B0F3'>Cancel Subscription</Button>
                            <Button>Upgrade Plan</Button>
                        </Flex>
                    </Flex>
                    <Text fontWeight={'600'} fontSize={'sm'}>Service</Text>
                    <Flex gap='10' w='full' alignItems={'center'} flexDirection={['column','row']}>
                        <Flex >
                            <Flex flexDirection={'column'} alignItems={'center'} w='60'>
                                <Flex  flexDirection={'column'} alignItems={'center'} bg='white' w='full'>
                                <Flex >
                                    <Text>$</Text>
                                    <Flex alignItems={'center'}>

                                        <Text color='#00B0F3' fontSize={'44'}>0</Text>
                                        <Text>/Month</Text>
                                    </Flex>
                                </Flex>
                                <Text fontWeight={'600'}>Free</Text>
                                </Flex>
                                <Divider />
                                <Flex pb='10' bg='#F1F5F9' gap='3' flexDirection={'column'}>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Post content with video & Picture</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Virtual Tickets</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Chat</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Inventory Management</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Analytics</Text>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </Flex>
                        <Flex>
                            <Flex flexDirection={'column'} alignItems={'center'} w='60'>
                                <Flex  flexDirection={'column'} alignItems={'center'} bg='#AAE4D7' w='full'>
                                <Flex >
                                    <Text>$</Text>
                                    <Flex alignItems={'center'}>

                                        <Text color='#00B0F3' fontSize={'44'}>5</Text>
                                        <Text>/Month</Text>
                                    </Flex>
                                </Flex>
                                <Text fontWeight={'600'}>Gold</Text>
                                </Flex>
                                <Divider />
                                <Flex pb='10'  bg='#F1F5F9' gap='3' flexDirection={'column'}>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Post content with video & Picture</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Virtual Tickets</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Chat</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Inventory Management</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Analytics</Text>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </Flex>
                        <Flex>
                            <Flex flexDirection={'column'} alignItems={'center'} w='60'>
                                <Flex  flexDirection={'column'} alignItems={'center'} bg='#06083C' w='full'>
                                <Flex >
                                    <Text color={'white'}>$</Text>
                                    <Flex alignItems={'center'}>

                                        <Text color='#00B0F3' fontSize={'44'}>100</Text>
                                        <Text color='white'>/Month</Text>
                                    </Flex>
                                </Flex>
                                <Text fontWeight={'600'} color={'#00B0F3'}>Platinum</Text>
                                </Flex>
                                <Divider />
                                <Flex pb='10'  bg='#F1F5F9' gap='3' flexDirection={'column'}>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Post content with video & Picture</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Virtual Tickets</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Chat</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Inventory Management</Text>
                                    </Flex>
                                    <Flex gap='3' px='2' alignItems={'center'}>
                                        <BsFillCheckCircleFill color='#00B0F3'/>
                                        <Text fontSize={'sm'}>Analytics</Text>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorAccountSubscription;