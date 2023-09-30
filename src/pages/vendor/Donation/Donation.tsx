import { CgSortAz } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
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
    SimpleGrid
} from '@chakra-ui/react';
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

const padding = [4, '50px'];
const spacing = [4, 5];
const VendorDonations = () => {
    const navigate = useNavigate();
    return (
        <Box bg='#0D0D0D1A' px={padding}>
            <Flex>
                <Flex py='10' gap='5' borderRadius='4px #0D0D0D1A '>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <AiOutlineSearch fontSize='20' />
                        </InputLeftElement>
                        <Input placeholder='Search for events' bg='#FFFFFF' />
                    </InputGroup>
                    <Button px='5' leftIcon={<AiOutlineSearch fontSize='20' />} bg='#00B0F3'>Search</Button>
                </Flex>
            </Flex>
            <Box>
                <Text
                    color='#201E1F'
                    fontFamily='Lato'
                    lineHeight='34.5px'
                    fontSize='24px'
                    fontWeight='600'
                    textTransform='uppercase'
                >
                    Categories
                </Text>
            </Box>

            <Box >
                <PanelHeader
                    fontSize={{ base: 'sm', md: 'auto' }}
                    
                    header='ACTIVE DONATION'
                    mb={8}

                    rightAction={
                        <Link href='#' color='#00B0F3'>
                            <Text color='white'>See all</Text>
                        </Link>
                    }
                />
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
                    columnGap={[4, 7]}
                    rowGap={[3, '30px']}
                   
                >
                    {Array.from({ length: 4 }, (_, i) => (
                        <GridItem key={i}>
                            <Image
                                w='344px'
                                h='197px'
                                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                            <Flex p='2'  justifyContent='space-between' fontFamily='Open Sans' bgColor='#fff'>
                                <Box>
                                    <Box>
                                        <Text fontSize={'sm'}>Charity</Text>
                                        <Text
                                            fontWeight='600'
                                            fontSize='16'
                                            color='#201E1F'
                                           
                                        >
                                            Help my life abeg
                                        </Text>
                                    </Box>
                                    <Flex pt='2' flexDirection={'column'}>
                                        <Text color='#00B0F3'>$1,000</Text>
                                        <Text fontWeight={'400'} fontSize={'sm'}>Donated by 12 donors </Text>

                                    </Flex>
                                </Box>
                                <Button fontSize={'sm'} onClick={() => navigate('/vendor/donations/vendor-donations-details')} bg='rgba(0, 176, 243, 1)'>View Details</Button>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            <Box pt='20'>
                <PanelHeader
                    fontSize={{ base: 'sm', md: 'auto' }}
                    
                    header='DONATION'
                    mb={8}

                    rightAction={
                        <Link href='#' color='#00B0F3'>
                            <Text color='white'>See all</Text>
                        </Link>
                    }
                />
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
                    columnGap={[4, 7]}
                    rowGap={[3, '30px']}
                   
                >
                    {Array.from({ length: 4 }, (_, i) => (
                        <GridItem key={i}>
                            <Image
                                w='344px'
                                h='197px'
                                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                            <Flex p='2'  justifyContent='space-between' fontFamily='Open Sans' bgColor='#fff'>
                                <Box>
                                    <Box>
                                        <Text fontSize={'sm'}>Charity</Text>
                                        <Text
                                            fontWeight='600'
                                            fontSize='16'
                                            color='#201E1F'
                                           
                                        >
                                            Help my life abeg
                                        </Text>
                                    </Box>
                                    <Flex pt='2' flexDirection={'column'}>
                                        <Text color='#00B0F3'>$1,000</Text>
                                        <Text fontWeight={'400'} fontSize={'sm'}>Donated by 12 donors </Text>

                                    </Flex>
                                </Box>
                                <Button fontSize={'sm'} onClick={() => navigate('/vendor/donations/vendor-donations-details')} bg='rgba(0, 176, 243, 1)'>View Details</Button>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Box>

            <Flex justifyContent='center' mx={['44px', 0]} my={[10, '66px']}>
                <Button w='600px'>Load More</Button>
            </Flex>
        </Box>
    );
};

export default VendorDonations;
