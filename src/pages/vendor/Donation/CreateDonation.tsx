import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Select, Text, Textarea } from "@chakra-ui/react"
import { BiSolidImageAdd } from "react-icons/bi";
const padding = [4, '50px'];
const spacing = [4, 5];
const CreateVendorDonation = () => {
    return (
        <Flex flexDirection={['column','row']} bg='#0D0D0D1A' gap='10' p='10' px={padding}>
            <Box>
                <Text fontWeight={'600'}>Create Donation</Text>
                <Box w={['auto','sm']} h='sm' bg='#D9D9D9'>

                </Box>
                <Center pt='5'>

                <Button leftIcon={<BiSolidImageAdd size='20'/>}>Add Image</Button>
                </Center>

            </Box>
            <Flex flexDirection={'column'} gap='3' w={['auto','sm']}>
                <FormControl>
                    <FormLabel>Donation category</FormLabel>
                    <Select bg='white'>
                        <option>Select an option</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Donation title</FormLabel>
                    <Input bg='white' placeholder="Name of the your donation" />
                </FormControl>
                <FormControl>
                    <FormLabel>Donation  Description</FormLabel>
                    <Textarea bg='white' placeholder="Add more details to your donations" />
                </FormControl>
                <FormControl>
                    <FormLabel>Donation Amount</FormLabel>
                    <Select bg='white' placeholder="Starting goal for your donation">
                        <option>Select an option</option>
                    </Select>
                </FormControl>
                <Text color='#4D4D4D' fontSize={'sm'}>
                    Keep in mind that transaction fees, including credit and debit charges, are deducted from each donation.
                </Text>
                <Flex gap='5' flexDirection={'column'} pt='10'>

                    <Button bg='#00B0F3' color='white'>Start Donation</Button>
                    <Button border='1px solid #00B0F3' bg='none' color='#00B0F3'>Save for later</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CreateVendorDonation