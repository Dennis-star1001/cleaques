



import { Box, Button, Divider, Flex, Image, Progress, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Polygon from "../../assets/Polygon 3.png"
import Clogo from "../../assets/Clogo.png"
import { RiAwardFill } from "react-icons/ri";
const  PointUserManagement = () => {
    const NavLink = [
        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
        { name: "Ticket", to: "/user-management-ticket" },
        { name: "Points", to: "/user-management-points" },
        { name: "Rewards", to: "/user-management-reward" },
    ]

    const PointCard = ({ point, category, note }: any) => {
        return (
            <Box bg='white' p='1' w='full' boxShadow={"-4px 0px 17px 0px rgba(13, 13, 13, 0.15)"}>
                <Flex py='5' position={'relative'} justifyContent={'space-between'} bg='#F1F5F9' alignContent={'center'}>
                    <Box >
                        <Flex gap='5' alignItems={'center'} px='5'>

                            <Box w='fit-content' position={'relative'}>
                                <Image src={Polygon} w='28' />
                                <Box right={'5'} top='7' position={'absolute'}>
                                    <RiAwardFill size='72' color='white' />
                                </Box>
                            </Box>
                            <Box>
                                <Text fontSize={'20'} fontWeight={'600'} color='#00B0F3'>{point}</Text>
                                <Text fontSize={'sm'}>{category}</Text>
                                {note &&
                                    <Text fontSize={'sm'} position={'absolute'} bottom={'0'}>{note}</Text>
                                }
                            </Box>
                        </Flex>

                    </Box>
                    <Box position={'absolute'} right='5' bottom='1'>
                        <Image src={Clogo} />
                    </Box>
                </Flex>
            </Box>
        )
    }

    const Designation = ({ background, designation }: any) => {
        return (
            <Box>
                <Text bg={background} px='5' w='fit-content' borderRadius={'5px'}>{designation}</Text>

            </Box>
        )
    }
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
                <Box w='5xl' bg='white' py='1' h='auto'>
                    <Flex flexDirection={'column'} gap='1'>
                        <Text px='5' py='5' fontSize={'20'} textTransform={'uppercase'} fontWeight={'600'}>Total Points</Text>

                        <PointCard point='38,470' category='point' note='Each point is equal to 10Cent' />

                    </Flex>

                    <Box mt='5' px='5'>
                        <Text py='5' fontSize={'20'} textTransform={'uppercase'} fontWeight={'600'}>Referrals</Text>

                        <Flex>

                            <Text bg='#F1F5F9'>https//:cleaques.com/RND1234XYZjhf378473</Text>
                            <Box>
                                <Text fontSize={'xs'}>Share</Text>
                                <Flex></Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <Divider mt='5' />
                    <Flex mt='5' gap='10' justifyContent={'space-between'}>
                        <PointCard point='264' category='Referrals' />
                        <PointCard point='4,723' category='Referrals points' />
                    </Flex>


                    <TableContainer mt='10' fontSize={'sm'}>
                        <Table variant='simple'>

                            <Thead bg='#F8FAFC'>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Designation</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Chinwe Adaeze</Td>
                                    <Td>
                                        <Designation background='#00B0F3' designation='personal' />
                                    </Td>

                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td display={'flex'} gap='2'>
                                        <Designation background='#00B0F3' designation='personal' />
                                        <Designation background='#E9634B' designation='vendor' />

                                    </Td>

                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td display={'flex'} gap='2'>
                                        <Designation background='#00B0F3' designation='personal' />
                                        <Designation background='#E9634B' designation='vendor' />

                                    </Td>

                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td display={'flex'} gap='2'>
                                        <Designation background='#00B0F3' designation='personal' />
                                        <Designation background='#E9634B' designation='vendor' />

                                    </Td>

                                </Tr>

                            </Tbody>

                        </Table>
                        <Box  px='40' pt='28' pb='10'>

                        <Button w='full'>Load More</Button>
                        </Box>
                    </TableContainer>
                </Box>
            </Flex>
        </Box>
    )
}

export default PointUserManagement;