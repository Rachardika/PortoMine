import {
    Container,
    useColorModeValue, 
    Box,
    Image,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/section'
import { GraphicGridItem } from '../components/gridItem'


import thumbPosterGraphic from '../public/images/graphics/poster_graphic1.jpeg'
import thumbPosterSeminar from '../public/images/graphics/poster_seminar.jpeg'
import thumbLogoJaguars from '../public/images/graphics/jogja_jaguar_Logo.png'
import thumbPosterTax from '../public/images/graphics/poster_Tax1.jpg'
import thumbfaqPoster from '../public/images/graphics/Faq_design.jpg'
import thumbfaqPoster2 from '../public/images/graphics/e-filing_FAQ1.jpg'


const Graphics = () => {
    const graphicImage = `/images/graphic${useColorModeValue('', '-dark')}.gif`
    return (
        <Container>
            <Section delay={0,1}>
            <Box 
            flexShrink={0} 
            mt={{base:4 , md: 6}} 
            mb={{ base:4, md: 4}} 
            mr={{ md: 5}}
            align="center"
          >
            <Image 
            maxWidth="210px" 
            borderRadius={5}
            src={graphicImage}
            alt="graphic-img"
            />
          </Box>
          </Section>
            <Heading
                as="h3"
                fontSize={20}
                mb={10}
                variant="section-title"
            >
                Graphic Design
            </Heading>
            <SimpleGrid
                columns={[1,1,2]} 
                gap={6}
            >
                <Section>
                    <GraphicGridItem
                        id="posterGraphic"
                        thumbnail={thumbPosterGraphic}
                        title="GO-Kar Poster Design"
                    >
                    </GraphicGridItem>
                </Section>
                <Section>
                    <GraphicGridItem
                        id="posterSeminar"
                        thumbnail={thumbPosterSeminar}
                        title="EXPO Poster SMA 1 Salatiga"
                    >
                    </GraphicGridItem>
                </Section>
                <Section>
                    <GraphicGridItem
                        id="logoJaguars"
                        thumbnail={thumbLogoJaguars}
                        title="Jogja Jaguars Basketball Logo Branding"
                    >
                    </GraphicGridItem>
                </Section>
                <Section>
                    <GraphicGridItem
                        id="posterTax"
                        thumbnail={thumbPosterTax}
                        title="Online Tax Poster"
                    >
                    </GraphicGridItem>
                </Section>
                <Section>
                    <GraphicGridItem
                        id="faqPoster1"
                        thumbnail={thumbfaqPoster}
                        title="Frequently asked Question Poster Tax"
                    >
                    </GraphicGridItem>
                </Section>
                <Section>
                    <GraphicGridItem
                        id="faqPoster2"
                        thumbnail={thumbfaqPoster2}
                        title="Frequently asked Question about E-Filing Poster Tax"
                    >
                    </GraphicGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Graphics