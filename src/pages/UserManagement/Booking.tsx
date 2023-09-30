import { Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const BookingUserManagement = () => {
    const NavLink = [
        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
        { name: "Ticket", to: "/user-management-ticket" },
        { name: "Points", to: "/user-management-points" },
        { name: "Rewards", to: "/user-management-reward" },
    ]
    return (
        <Box bg='#E1EEF3' p='20'>
            <Flex gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w='sm' h='80' bg='white'>
                    <Text px='5' py='5' fontWeight={'600'}>User Management</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w='5xl'>
                    <Text px='10' py='5' fontWeight={'600'}>Boo</Text>
                    <Flex gap='2' bg='#E1EEF3' p='5' mx='10' >
                        <Image
                            w='250px'
                            h='120px'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex gap='20'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Text fontSize={'sm'}>Sponsor: IluzBrandNigeriaLimited God Grace</Text>
                                <Progress value={20} size='xs' colorScheme='#00B0F3' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap='2' bg='#E1EEF3' p='5' mx='10' >
                        <Image
                            w='250px'
                            h='120px'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex gap='20'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Text fontSize={'sm'}>Sponsor: IluzBrandNigeriaLimited God Grace</Text>
                                <Progress value={20} size='xs' colorScheme='#00B0F3' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap='2' bg='#E1EEF3' p='5' mx='10' >
                        <Image
                            w='250px'
                            h='120px'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex gap='20'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                                <Text fontSize={'sm'}>Sponsor: IluzBrandNigeriaLimited God Grace</Text>
                                <Progress value={20} size='xs' colorScheme='#00B0F3' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex flexDirection={'column'} gap='3' textAlign={'center'}>
                                <Button>Donate again</Button>
                                <Text fontSize={'xs'}>In Progress</Text>
                                <Text fontSize={'xs'}>You Donated</Text>
                                <Text fontWeight={'600'} fontSize={'md'}>$100</Text>
                            </Flex>
                        </Flex>
                    </Flex>


                </Flex>
            </Flex>
        </Box>
    )
}

export default BookingUserManagement;