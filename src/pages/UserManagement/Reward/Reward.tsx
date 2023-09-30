import { Box, Button, Flex, Image, Progress, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { AiFillGift, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const RewardUserManagement = () => {
    const NavLink = [

        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
        { name: "Ticket", to: "/user-management-ticket" },
        { name: "Points", to: "/user-management-points" },
        { name: "Rewards", to: "/user-management-reward" },
    ]

    const PointHistoryNotification = ({ icon, message, points }: any) => {
        return (
            <Flex fontSize={'sm'} p='1' alignItems={'center'} justifyContent={'space-between'} w='full' border='1px solid #ADA8AB' borderRadius={'5px'}>
                <Flex gap='2' alignItems={'center'}>
                    {icon}
                    <Text>{message}</Text>
                </Flex>
                <Flex gap='2' alignItems={'center'}>
                    <AiFillGift color='#E9634B' />
                    <Text>{points} Points</Text>
                </Flex>
            </Flex>
        )
    }
    const navigate = useNavigate();
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
                <Flex flexDirection={'column'} gap='0' bg='white' h='auto' w='5xl'>
                    <Box bg='#EE8674' w='full' h='auto'>
                        <Text px='5' pt='5' color='white'>MY REWARDS</Text>

                        <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'} w='full'>

                            <Box>
                                <Text fontSize={'sm'} textAlign={'center'} color='white'>Current Point</Text>
                                <Button py='7' px='10' fontSize={'32'} fontWeight={'500'} color={'#00B0F3'} bg='white'>
                                    23,792
                                </Button>
                            </Box>
                            <Flex color='black' gap='5' p='5'>
                              
                                <Button onClick={()=>navigate("/nigeria_local_government")} color='black' bg='#F2994A'>Deposit To Banks</Button>
                                <Button onClick={()=>navigate("/buy-more-points")} color='black' bg='#4B8AE9'>Buy more Points</Button>
                                <Button onClick={()=>navigate("/share-points")}  color='black' bg='#4BE97A'>Share Points</Button>
                            </Flex>

                        </Flex>
                    </Box>
                    <Tabs position="relative" variant="unstyled">
                        <TabList  bg='#EBE9E9'>
                            <Tab fontSize={'sm'}>Points History</Tab>
                            <Tab fontSize={'sm'}>Wallet History</Tab>
                            <Tab fontSize={'sm'}>Redeem Points</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="blue.500"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <Flex flexDirection={'column'} gap='10'>
                                    <Box pt='10'>
                                        <Text fontWeight={'600'}>Yesterday</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={'600'}>A month ago</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>

                                    <Box>
                                        <Text fontWeight={'600'}>6 month</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                            <Flex flexDirection={'column'} gap='10'>
                                    <Box pt='10'>
                                        <Text fontWeight={'600'}>Yesterday</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={'600'}>A month ago</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>

                                    <Box>
                                        <Text fontWeight={'600'}>6 month</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                            <Flex flexDirection={'column'} gap='10'>
                                    <Box pt='10'>
                                        <Text fontWeight={'600'}>Yesterday</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={'600'}>A month ago</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>

                                    <Box>
                                        <Text fontWeight={'600'}>6 month</Text>
                                        <Flex bg='#FCF1EF' flexDirection={'column'} gap='2' p='5'>
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                            <PointHistoryNotification points='10' message='You liked a post' icon={<AiFillHeart color='#E9634B' />} />
                                        </Flex>
                                    </Box>
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Flex>
            </Flex>
        </Box>
    )
}

export default RewardUserManagement;
