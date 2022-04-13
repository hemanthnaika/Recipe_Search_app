import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <img width={'33vh'}  src="data:image/png;base64,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" alt="" />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
               <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS= [
  {
    label: 'HOME',
    href:'/',
  },
  {
    label: 'SEARCH RECIPE',
    href:'/Search',
  },
  {
    label: 'JUST FOR YOU',
    href: '/Just_For_You',
  },
  {
    label: 'VEG',
    href: '/Veg',
  },
  {
    label: 'NON-VEG',
    href: '/Non_Veg',
  },
];