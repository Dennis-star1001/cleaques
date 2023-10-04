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
    Divider
} from '@chakra-ui/react';
import Bannar from "../../assets/dummy-banner.png"
import { BsShareFill } from 'react-icons/bs';
import MakeDonation from './MakeDonation';
import ViewDonors from './ViewDonors';
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

const DonationDetails = () => {
    return (
        <Box py='10' bg='#0D0D0D1A' px={padding}>
            <Center mb={['0','20']} position={'relative'} display='flex' p='10' px={spacing} sx={{ svg: { fontSize: '20px' } }}>
                <Box  >
                    <Box >
                        <Image w={'6xl'} h={'80'} objectFit={'cover'} src={Bannar} />
                        <Box border={['none','5px solid white']} borderRadius={'full'} p='3' bg='rgba(241, 245, 249, 1)' position={'absolute'} right={['10', '28']} bottom={['24', '0']}>
                            <AiOutlineHeart color='rgba(0, 176, 243, 1)' size={'40'} />
                        </Box>
                    </Box>
                    <Flex  gap='3' mt='5' alignItems={'end'} position={['unset', 'absolute']} left={['5', '28']} bottom='-7'>
                        <Image w={['16', '40']} objectFit={'cover'}  border={['none','5px solid white']} bg='red' h={['16', '40']} borderRadius={'full'} src={Bannar} />
                        <Box >
                            <Text fontWeight={'600'} fontSize={['14','20']}>Nicholas Adams</Text>
                            <Text fontSize={'sm'} w='fit-content' px='3' py='1' textAlign={'center'} color={'rgba(0, 176, 243, 1)'} bg='rgba(225, 238, 243, 1)'>Charity</Text>
                        </Box>
                    </Flex>
                </Box>


            </Center>
            <Flex flexDirection={'column'} justifyContent={'center'} position={'relative'} display='flex'  px={spacing} sx={{ svg: { fontSize: '20px' } }}>

                <Box bg='white' boxShadow={'0px 2px 12px 0px rgba(0, 0, 0, 0.15)'} borderRadius={'8px'}>
                    <SimpleGrid columns={[1, 6]} gap={['5','16']} alignItems={'center'} p='5' fontSize={['sm','16']}>
                        <Text w='fit-content'> Donation Started:  16th August, 2023</Text>
                        <Text w='fit-content'>Donations: $4,500/ 5,000</Text>
                        <Text w='fit-content'>Donors: 5 People</Text>
                        <ViewDonors />

                        <MakeDonation />
                        <Button w='fit-content'><BsShareFill /></Button>

                    </SimpleGrid>
                </Box>
                <Box px={['1','10']} pt='10'>
                    <Text fontSize={'24'}>Help my life, landlord wan beat me</Text>
                    <Divider my='3' color='gray' />
                    <Text fontSize={'sm'} color='rgba(77, 77, 77, 1)'>Lorem ipsum dolor sit amet consectetur. Tempus dui in nibh eu quam tortor. Dolor hendrerit est morbi sem nisl morbi tempus. Quis amet phasellus vel commodo nunc habitant. Elementum viverra sed in suspendisse id.
                        Ut risus suscipit praesent varius. Ornare pharetra magna pellentesque lacus.
                        Sit lectus eget congue ut ipsum a. Interdum enim quam morbi orci quam.
                        Cursus at et sit elit. Leo volutpat et duis pellentesque amet. Vitae viverra curabitur a nam.</Text>

                </Box>
            </Flex>

            <Box m='4'>
                <PanelHeader
                    mx={[0, spacing[1]]}
                    header='Similar Donations'
                    mb={8}
                    rightAction={
                        <Link href='/events_near' color='#00B0F3'>
                            <Text color='white'>See all</Text>
                        </Link>
                    }
                />
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
                    columnGap={[4, 7]}
                    rowGap={[3, '30px']}
                    mx={[0, spacing[1]]}
                >
                    {Array.from({ length: 8 }, (_, i) => (
                        <GridItem key={i}>
                            <Image
                                w='344px'
                                h='197px'
                                src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            />
                            <Box p='2' fontFamily='Open Sans' bgColor='#fff'>

                                <Text
                                    fontWeight='600'
                                    fontSize='16'
                                    color='#201E1F'
                                    mt='2'
                                    mb='2'
                                >
                                    Help my life abeg
                                </Text>
                                <Text
                                    fontWeight='normal'
                                    fontSize='14'
                                    lineHeight='24.08px'
                                    color='#201E1F'
                                    mt='2'
                                    mb='2'
                                >
                                    Lorem ipsum dolor sit amet consectetur. Elementum bibendum suspendisse enim convallis dolor interdum.
                                </Text>
                                <Flex alignItems={'center'} justifyContent={'space-between'}>
                                    <Text fontWeight={'bold'} fontSize={'sm'}>$14,334 Donated </Text>
                                    <Button bg='rgba(0, 176, 243, 1)'>View Details</Button>
                                </Flex>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>

        </Box>
    );
};

export default DonationDetails;
