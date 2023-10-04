import { Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react"
import { CiCalendar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const VendorSaveItemEvent = () => {
    const NavLink = [
        { name: "Post", to: "/vendor/saved-item-post" },
        { name: "Booking", to: "/vendor/saved-item-booking" },
        { name: "Donation", to: "/vendor/saved-item-donation" },
        { name: "Event", to: "/vendor/saved-item-event" },
    ]
    return (
        <Box bg='#E1EEF3'  p={['5','20']}>
            <Flex flexDirection={['column','row']}  gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w={['auto','sm']} h='80' bg='white'>
                <Text px='5' py='5' fontSize={'20'} fontWeight={'500'}>Saved Items</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w={['fit-content','5xl']}>
                <Text px='5' py='5' fontSize={'20'} fontWeight={'500'}>Event</Text>
                    <Flex  alignItems={'flex-start'}  gap='5' bg='#E1EEF3'  p={['0','5']} pt='5' mx={['0','10']} >
                        <Image
                          w={['20','200px']}
                          h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex flexDirection={['column','row']} justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['16','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Flex flexDirection={['row','row']} gap='5'>
                                    <Flex>
                                        <CiCalendar color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Aug 6 - Aug 13, 2023 | 6:pm GMT</Text>
                                    </Flex>
                                    <Flex>
                                        <GrLocation color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Online</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={['row','column']} gap='3' textAlign={'center'}>
                                <Button w='fit-content' borderRadius={'0'}>View Details</Button>
                              
                                <Text  w='fit-content' fontWeight={'600'} fontSize={'md'}>FREE</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex  alignItems={'flex-start'}  gap='5' bg='#E1EEF3'  p={['0','5']} mx={['0','10']} >
                        <Image
                          w={['20','200px']}
                          h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex flexDirection={['column','row']} justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['16','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Flex flexDirection={['row','row']} gap='5'>
                                    <Flex>
                                        <CiCalendar color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Aug 6 - Aug 13, 2023 | 6:pm GMT</Text>
                                    </Flex>
                                    <Flex>
                                        <GrLocation color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Online</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={['row','column']} gap='3' textAlign={'center'}>
                                <Button w='fit-content' borderRadius={'0'}>View Details</Button>
                              
                                <Text  w='fit-content' fontWeight={'600'} fontSize={'md'}>FREE</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex  alignItems={'flex-start'}  gap='5' bg='#E1EEF3'  p={['0','5']} mx={['0','10']} >
                        <Image
                          w={['20','200px']}
                          h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex flexDirection={['column','row']} justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['16','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Flex flexDirection={['row','row']} gap='5'>
                                    <Flex>
                                        <CiCalendar color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Aug 6 - Aug 13, 2023 | 6:pm GMT</Text>
                                    </Flex>
                                    <Flex>
                                        <GrLocation color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Online</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={['row','column']} gap='3' textAlign={'center'}>
                                <Button w='fit-content' borderRadius={'0'}>View Details</Button>
                              
                                <Text  w='fit-content' fontWeight={'600'} fontSize={'md'}>FREE</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex  alignItems={'flex-start'}  gap='5' bg='#E1EEF3'  p={['0','5']} mx={['0','10']} >
                        <Image
                          w={['20','200px']}
                          h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex flexDirection={['column','row']} justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['16','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Flex flexDirection={['row','row']} gap='5'>
                                    <Flex>
                                        <CiCalendar color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Aug 6 - Aug 13, 2023 | 6:pm GMT</Text>
                                    </Flex>
                                    <Flex>
                                        <GrLocation color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Online</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={['row','column']} gap='3' textAlign={'center'}>
                                <Button w='fit-content' borderRadius={'0'}>View Details</Button>
                              
                                <Text  w='fit-content' fontWeight={'600'} fontSize={'md'}>FREE</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex  alignItems={'flex-start'}  gap='5' bg='#E1EEF3'  p={['0','5']} mx={['0','10']} >
                        <Image
                          w={['20','200px']}
                          h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex flexDirection={['column','row']} justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['16','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Flex flexDirection={['row','row']} gap='5'>
                                    <Flex>
                                        <CiCalendar color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Aug 6 - Aug 13, 2023 | 6:pm GMT</Text>
                                    </Flex>
                                    <Flex>
                                        <GrLocation color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Online</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={['row','column']} gap='3' textAlign={'center'}>
                                <Button w='fit-content' borderRadius={'0'}>View Details</Button>
                              
                                <Text  w='fit-content' fontWeight={'600'} fontSize={'md'}>FREE</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex  alignItems={'flex-start'}  gap='5' bg='#E1EEF3'  p={['0','5']} mx={['0','10']} >
                        <Image
                          w={['20','200px']}
                          h={['20','120px']}
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex flexDirection={['column','row']} justifyContent={'space-between'} w='full'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontSize={['16','24']} fontWeight={'500'} color='#00B0F3'>State Music Award</Text>
                                <Flex flexDirection={['row','row']} gap='5'>
                                    <Flex>
                                        <CiCalendar color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Aug 6 - Aug 13, 2023 | 6:pm GMT</Text>
                                    </Flex>
                                    <Flex>
                                        <GrLocation color='#00A4E9' size='20'/>
                                        <Text fontSize={'sm'}>Online</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={['row','column']} gap='3' textAlign={'center'}>
                                <Button w='fit-content' borderRadius={'0'}>View Details</Button>
                              
                                <Text  w='fit-content' fontWeight={'600'} fontSize={'md'}>FREE</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                 


                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorSaveItemEvent;