import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

const IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrGVDBYt3H4ygedTJyJsJwyJm_yvcaC-GEw&usqp=CAU';

export default function SearchFoodCard({title,calories,image,ingredients,cuisineType}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Center py={12} >
      <Box onClick={onOpen}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
         
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
         {title}
         
          </Heading>
          <Text fontWeight={700} fontSize={'md'}>
          CuisineType : {cuisineType}
            </Text>
          <Stack direction={'row'} align={'center'}>
          
            <Text fontWeight={700} fontSize={'md'}>
            Calories : {calories.toFixed(2)}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image
            rounded={'lg'}
            height={230}
            width={'100%'}
            objectFit={'cover'}
            src={image}
          />
          <ModalHeader>Ingredients</ModalHeader>
          {ingredients.map(ingredient=>(
            <ul>
<li>{ingredient.text}</li>
            </ul>
            
          ))}
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}