import { Box, Button, Divider, Flex, Image, Input, Progress, Select, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { AiFillGift, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const WithdrawalNigerianDomiciallyAccount = () => {
    const navigate = useNavigate();
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
    return (
        <Box bg='white' p='20'>
            <Flex w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap='10'>
                <Box>
                    <Select w='xl' bg='#E1EEF3' placeholder="Event Wallet">
                        <option></option>
                    </Select>
                    <Text fontSize={'sm'} textAlign={'center'}>Available Balance: $1,245.45</Text>
                </Box>
                <Flex w='full' py='5' justifyContent={'center'} gap='10'>
                    <Button  onClick={() => navigate("/vendor/withdrawal/nigeria-local-bank")} fontWeight={'500'} py='10' color='black' bg='#E1EEF3' w='60'>Nigerian Local Bank</Button>
                    <Button color='white' onClick={() => navigate("/vendor/withdrawal/nigeria-domically-account")} fontWeight={'500'}  py='10' w='60'>Nigerian domicially account</Button>
                    <Button color='black' onClick={() => navigate("/vendor/withdrawal/us-account")} fontWeight={'500'} bg='#E1EEF3' py='10' w='60'>US Account</Button>
                </Flex>
                <Flex gap='5' alignItems={'center'} flexDirection={'column'} w='xl'>
                    <Select bg='#E1EEF3' placeholder="Select destination bank ">
                        <option></option>
                    </Select>
                    <Input bg='#E1EEF3' placeholder="Account Number" />
                    <Input bg='#E1EEF3' placeholder="Account Name" />
                    <Input bg='#E1EEF3' placeholder="E-mail Address " />
                    <Input bg='#E1EEF3' placeholder="Phone Number  " />
                    <Input bg='#E1EEF3' placeholder="Amount to withdraw" />
                    <Input bg='#E1EEF3' placeholder="Transaction fee" />
                    <Input bg='#E1EEF3' placeholder="Expected payout" />

                    <Button w='md'>Proceed</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default WithdrawalNigerianDomiciallyAccount;
