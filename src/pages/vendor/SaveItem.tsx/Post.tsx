import { Avatar, Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react"
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const VendorSaveItemPost = () => {
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
                    <Text px='5' fontSize={'20'} fontWeight={'500'}>Saved Items</Text>
                    <Box mx={['5','10']} w='fit-content' p='5' bg='#E1EEF3   '>
                        <Flex gap='2'>
                            <Avatar size={'sm'} name="D" />
                            <Box>
                                <Text fontWeight={'600'} fontSize={'sm'}>Mike John</Text>
                                <Text fontSize={'xs'}>2hrs</Text>
                            </Box>
                        </Flex>
                        <Box pt='5'>
                            <Text color='#00B0F3' fontWeight={'600'}>Tagged: Orioferoliwa Peters</Text>
                            <Text maxW={'72'} fontSize={'sm'}>Sed elementum turpis netus maecenas et quis neque feugiat.
                                Dolor purus egestas hac adipiscing mauris convallis sed.
                                Mattis a rhoncus vulputate elit blandit egestas feugiat sed augue.
                                Tempor commodo risus lacus nec purus dictum dolor.</Text>
                        </Box>
                        <Flex justifyContent={'center'} alignItems={'center'} pt='5' gap='5'>
                            <Button fontSize={'sm'} w={['18','40']} color='black' bg='#00B0F3'>Make post</Button>
                            <Button fontSize={'sm'} w={['18','40']} color='black' border='1px solid #00B0F3' bg='none'>Edit post</Button>
                            <Button bg='red'>

                                <AiOutlineDelete size='24' color='white' />
                            </Button>
                        </Flex>
                    </Box>

                    <Box mx={['5','10']} p='5' bg='#E1EEF3' w='fit-content'>
                        <Flex gap='2'>
                            <Avatar size={'sm'} name="D" />
                            <Box>
                                <Text fontWeight={'600'} fontSize={'sm'}>Mike John</Text>
                                <Text fontSize={'xs'}>2hrs</Text>
                            </Box>
                        </Flex>
                        <Box pt='5'>
                            <Text color='#00B0F3' fontWeight={'600'}>Tagged: Orioferoliwa Peters</Text>
                            <Text fontSize={'sm'}>Sed elementum turpis netus maecenas et quis neque feugiat.
                                Dolor purus egestas hac adipiscing mauris convallis sed.
                                Mattis a rhoncus vulputate elit blandit egestas feugiat sed augue.
                                Tempor commodo risus lacus nec purus dictum dolor.</Text>
                            <Image
                            my='10'
                                w='full'
                                h='md'
                                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                        </Box>
                        <Flex justifyContent={'center'} pt='5' gap='5'>
                            <Button fontSize={'sm'} w={['18','40']} color='black' bg='#00B0F3'>Make post</Button>
                            <Button fontSize={'sm'} w={['18','40']} color='black' border='1px solid #00B0F3' bg='none'>Edit post</Button>
                            <Button bg='red'>

                                <AiOutlineDelete size='24' color='white' />
                            </Button>
                        </Flex>
                    </Box>


                </Flex>
            </Flex>
        </Box>
    )
}

export default VendorSaveItemPost;