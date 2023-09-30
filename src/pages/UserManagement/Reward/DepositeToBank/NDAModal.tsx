import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import OTPInput from "react-otp-input"

export const NDAModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [otp, setOtp] = useState('');
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    return (
        <>

            <Button onClick={onOpen} mt='20' mx='20' color='white' bg='#E9634B'>Proceed</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent textAlign={'center'}>
                    <ModalHeader fontSize={'sm'}>Deposit to Bank</ModalHeader>
                    <ModalCloseButton />
                    <Box>
                        <Text fontSize={'sm'}>Transfer 1,000 cleaques point for $100 to your  bank account</Text></Box>
                    <ModalBody>
                        <Box>
                            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} >
                                <Text fontWeight={'600'} mb='5' fontSize={'sm'} textAlign={'center'}>Enter Transaction Pin</Text>
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    inputStyle={{ width: '60px', height: '60px', backgroundColor:'#FCF1EF' }}
                                    renderInput={(props) => <Input bg='white' px='0' _notLast={{ marginRight: '10' }} {...props} />}
                                />
                            </Flex>
                        </Box>
                    </ModalBody>

                    <ModalFooter justifyContent={'center'}>
                    <Button w='full' onClick={onClose}  color='white' bg='#E9634B'>Withdraw to Bank</Button>
                       
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}