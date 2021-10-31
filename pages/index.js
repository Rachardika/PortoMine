import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Text, 
  useColorModeValue,
  SimpleGrid, 
  Image,
  Grid, 
  Link,
  Icon,
  Button
} from '@chakra-ui/react'
import {
  IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter
} from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/Paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  const aboutImg = `/images/about${useColorModeValue('', '-dark')}.png`

    return (
        <Container>
          <Section delay={0.1}>
          <Box 
            flexShrink={0} 
            mt={{base:4 , md: 4}} 
            mb={{ base:4, md: 4}} 
            ml={{ md: 0}}
            align="center"
          >
            <Image 
            maxWidth="200px" 
            borderRadius={5}
            src={aboutImg}
            alt="about-img"
            />
          </Box>
          </Section>
          <Section delay={0.2}>
          <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500','gray.700')} 
            p={3} 
            mb={6} 
            align="center"
          >
          <Grid templateColumns="repeat(4, 1fr)" gap={0}>
            <Link 
                href="https://twitter.com/Rachardika"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
              >
                <Icon as={IoLogoTwitter} />
              </Button>
            </Link>
            <Link
                href="https://www.instagram.com/rchrdika/"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
              >
                <Icon as={IoLogoInstagram} />
              </Button>
            </Link>
            <Link
                href="https://github.com/Rachardika?tab=repositories"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
              >
                <Icon as={IoLogoGithub} />
              </Button>
            </Link>
            <Link
                href="https://www.linkedin.com/in/rusphika-rachardika-6aa45821b/"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
              >
                <Icon as={IoLogoLinkedin} />
              </Button>
            </Link>
          </Grid>
          </Box>
          </Section>
        <Section delay={0.4}>
          <Box display={{ md:'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title" >
                Rusphika Rachardika
              </Heading>
              <Text> Front-End Developer | UI/UX Developer </Text>
            </Box>
          </Box>
        </Section>
        <Section delay={0.4}>
          <Heading 
            as="h3" 
            variant="section-title"
            mt={10}
            mb={3}
          >
            About
          </Heading>
          <Paragraph>
            Rachardika is a junior front-end developer based in Salatiga, Central Java with a passion for
            building website, from planning and designing UI / UX. When not online, he loves sport and music, you can read 
            his Resume bellow.
          </Paragraph>
          <Box
            align="center"
            my={4}          
          >
            <SimpleGrid
              columns={[1,1,3]}
              gap={3}
            >
            <NextLink href="/projects">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="purple"
            >
              My Portofolio
            </Button>
            </NextLink>
            <Link
             href="mailto:rachardika.rusphika@gmail.com"
            >
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="red"
            >
              Mail Me
            </Button>
            </Link>

            <Link
              href="/file/CV - Rusphika Rachardika.pdf"
            >
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Resume
            </Button>
            </Link>
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.5}>
          <Heading
            as="h3"
            variant="section-title"
          >
            Biography
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Salatiga, Central Java
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from Senior High-School 1 Salatiga
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            I studied Information Technology at Satya Wacana Christian University.
            My major was Information Engineering Program.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Internship in LPM Satya Wacana Christian University as a fullstack php developer
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Work as a freelance Front-End Developer, in PT Skala Teknologi Nusantara
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Freshly Graduated From Satya Wacana Christian University
          </BioSection>
        </Section>
        <Section delay={0.6}>
          <Heading 
            as="h3"
            variant="section-title"
          >
            Hobbies
          </Heading>
          <Paragraph>
            Piano, Singing, Guitar, <Link href="https://www.instagram.com/p/BpoqhmqnMKG/?utm_source=ig_web_copy_link">Football</Link>, 
            Basketball, <Link href="https://www.skala.co.id/">Website Development</Link>,
            Design Graphic. 

          </Paragraph>
        </Section>
        </Container>
    )
}

export default Page