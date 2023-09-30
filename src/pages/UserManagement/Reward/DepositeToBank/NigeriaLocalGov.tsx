import { Box, Button, Divider, Flex, Image, Input, Progress, Select, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { AiFillGift, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { NLGModal } from "./NLGModal";

const NigeriaLocalGov = () => {
    const NavLink = [

        { name: "Bookings", to: "/user-management-bookings" },
        { name: "Donations", to: "/user-management-donation" },
        { name: "Ticket", to: "/user-management-ticket" },
        { name: "Points", to: "/user-management-points" },
        { name: "Rewards", to: "/user-management-reward" },
    ]
    const navigate = useNavigate();
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

                                <Button onClick={() => navigate("/nigeria_local_government")} color='black' bg='#F2994A'>Deposit To Banks</Button>
                                <Button onClick={() => navigate("/buy-more-points")} color='black' bg='#4B8AE9'>Buy more Points</Button>
                                <Button onClick={() => navigate("/share-points")} color='black' bg='#4BE97A'>Share Points</Button>
                            </Flex>

                        </Flex>
                    </Box>
                    <Tabs position="relative" variant="unstyled">
                        <TabList bg='#EBE9E9'>
                            <Tab>Deposit to Bank</Tab>

                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="#E9634B"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <Flex py='5' justifyContent={'center'} gap='10'>
                                    <Button color='white' onClick={() => navigate("/nigeria_local_government")} fontWeight={'500'} bg='#E9634B' py='10' w='60'>Nigerian Local Bank</Button>
                                    <Button color='black' onClick={() => navigate("/nigeria_domicially_account")} fontWeight={'500'} bg='#FCF1EF' py='10' w='60'>Nigerian domicially account</Button>
                                    <Button color='black' onClick={() => navigate("/us_account")} fontWeight={'500'} bg='#FCF1EF' py='10' w='60'>US Account</Button>
                                </Flex>

                                <Divider my='5' />

                                <Box>
                                    <Flex justifyContent={'center'} gap='20' py='2' bg='#E9634B' color='white'>
                                        <Text>1000 points = $1</Text>
                                        <Text>Current Point: 23,646</Text>
                                    </Flex>
                                    <Flex px='20' py='10' gap='5' flexDirection={'column'}>
                                        <Select borderRadius={'0'} placeholder="Select destination bank " bg='#FCF1EF' color='#201E1F' >
                                            <option>bank</option>
                                        </Select>
                                        <Input borderRadius={'0'} placeholder="Account Number" bg='#FCF1EF' color='#201E1F' />
                                        <Input borderRadius={'0'} placeholder="Account Name" bg='#FCF1EF' color='#201E1F' />
                                        <Input borderRadius={'0'} placeholder="Amount of Cleaques point to withdraw" bg='#FCF1EF' color='#201E1F' />
                                        <Input borderRadius={'0'} placeholder="Local Amount" bg='#FCF1EF' color='#201E1F' />
                                        <Input borderRadius={'0'} placeholder="Transaction fee" bg='#FCF1EF' color='#201E1F' />
                                        <Input borderRadius={'0'} placeholder="Expected payout" bg='#FCF1EF' color='#201E1F' />
                                        <NLGModal/>
                                       
                                    </Flex>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Flex>
            </Flex>
            
        </Box>
    )
}

export default NigeriaLocalGov;
