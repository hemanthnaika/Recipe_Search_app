import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props: any) => {
  return (
    <Flex  spacing={'20px'}>
  <img width={'40vh'}  src="data:image/png;base64,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" alt="" />

  </Flex>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Text>© {(new Date ().getFullYear())} Recipe search. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}