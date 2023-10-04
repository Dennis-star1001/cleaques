import { CgSortAz } from 'react-icons/cg';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { PanelHeader } from '@/components/panel';
import { CiLocationOn } from 'react-icons/ci';
import {
    Box,
    Text,
    Button,
    IconButton,
    Input,
    Center,
    Link,
    Grid,
    Flex,
    Image,
    GridItem,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Divider,
    TableContainer,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Table
} from '@chakra-ui/react';
import Bannar from "../../../assets/dummy-banner.png"
import { BsShareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router';

interface EventLink {
    link: string;
    name: string;
}

const eventLinks: EventLink[] = [
    { name: 'Disaster ', link: '/Online_Events' },
    { name: 'Missionary ', link: '/free_events' },
    { name: 'Children', link: '/paid_events' },
    { name: 'Business ', link: '/upcoming_events' },
    { name: 'Emergency', link: '/events_near' },
    { name: 'Others', link: '/training' },

];
const padding = [2, '50px'];
const spacing = [4, 5];

const VendorDonationDetails = () => {
    const navigate = useNavigate()
    return (
        <Box py='10' bg='#0D0D0D1A' px={padding}>
            <Button onClick={()=>navigate('/vendor/donations/create-vendor-donation')}>Create Donation</Button>
            <Flex flexDirection={'column'} mb={['0', '20']} position={'relative'} display='flex' p='10' px={spacing} sx={{ svg: { fontSize: '20px' } }}>

                <Box px={spacing} >
                    <Image w={'full'} h={'80'} objectFit={'cover'} src={Bannar} />

                </Box>



                <Flex flexDirection={'column'} justifyContent={'center'} position={'relative'} display='flex' px={spacing} sx={{ svg: { fontSize: '20px' } }}>

                    <Box bg='white' boxShadow={'0px 2px 12px 0px rgba(0, 0, 0, 0.15)'} borderRadius={'8px'}>
                        <SimpleGrid columns={[1,7]} gap={['5', '20']} alignItems={'center'} p='5' fontSize={['sm', '16']}>
                            <Text> Donation Started:  16th August, 2023</Text>
                            <Text >Donations: $4,500/ 5,000</Text>
                            <Text >Donors: 5 People</Text>

                            <Button w='fit-content'>Edit Donation</Button>
                            <Button w='fit-content'><BsShareFill /></Button>

                        </SimpleGrid>
                    </Box>
                    <Box px={['1', '0']} pt='10'>
                        <Text fontSize={'24'}>Help my life, landlord wan beat me</Text>
                        <Divider my='3' color='gray' />
                        <Text fontSize={'sm'} color='rgba(77, 77, 77, 1)'>Lorem ipsum dolor sit amet consectetur. Tempus dui in nibh eu quam tortor. Dolor hendrerit est morbi sem nisl morbi tempus. Quis amet phasellus vel commodo nunc habitant. Elementum viverra sed in suspendisse id.
                            Ut risus suscipit praesent varius. Ornare pharetra magna pellentesque lacus.
                            Sit lectus eget congue ut ipsum a. Interdum enim quam morbi orci quam.
                            Cursus at et sit elit. Leo volutpat et duis pellentesque amet. Vitae viverra curabitur a nam.</Text>

                    </Box>
                </Flex>
            </Flex>

            <Box px={spacing}>
                <Text>DONATIONS</Text>
                <SimpleGrid columns={[1,4]} gap={['5', '5']} alignItems={'center'} fontSize={['sm', 'sm']}>
                    <Text>Amount Donated: $50,000</Text>
                    <Box>
                        <Text>Amount Withdrawable : $47,000</Text>
                        <span>(without Tax)</span>
                    </Box>
                    <Text >Amount Withdrawn : $7,000</Text>
                    <Flex gap='5'>

                        <Button w='fit-content' >Withdraw Donations</Button>
                        <Button bg='none'  border='1px solid #00B0F3' color={'#00B0F3'}>Export to PDF</Button>
                    </Flex>

                </SimpleGrid>
            </Box>
            <Box px={spacing}>
                <TableContainer >
                    <Table variant='simple' >
               
                        <Thead >
                            <Tr bg='var(--neutral-gray-50, #F8FAFC)'>
                                <Th>Name of donors </Th>
                                <Th>Amount</Th>
                                <Th>Donation</Th>
                                <Th>Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody bg='white'>
                            <Tr>
                                <Td>Chinwe Adaeze</Td>
                                <Td>$2,454</Td>
                                <Td>Charity Development </Td>
                                <Td>Wednesday 12th, May 2032 | 6:00pm</Td>
                            </Tr>
                            <Tr>
                                <Td>Chinwe Adaeze</Td>
                                <Td>$2,454</Td>
                                <Td>Charity Development </Td>
                                <Td>Wednesday 12th, May 2032 | 6:00pm</Td>
                            </Tr>
                            <Tr>
                                <Td>Chinwe Adaeze</Td>
                                <Td>$2,454</Td>
                                <Td>Charity Development </Td>
                                <Td>Wednesday 12th, May 2032 | 6:00pm</Td>
                            </Tr>
                           
                        </Tbody>
                       
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    );
};

export default VendorDonationDetails;
