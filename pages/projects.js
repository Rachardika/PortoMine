import {
    Container,
    useColorModeValue, 
    Heading,
    Box,
    Image,
    SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/gridItem'

import thumbSilandak from '../public/images/projects/silandak_landing.jpg'
import thumbBarcode from '../public/images/projects/barcode_generator.jpg'
import thumbCredit from '../public/images/projects/credit.jpg'
import thumbInterfast from '../public/images/projects/interfast.jpg'
import thumbPldUi from '../public/images/projects/pld_ui.jpg'
import thumbPiki from '../public/images/projects/piki.jpg'

const Projects = () => {
    const mainImage = `/images/project${useColorModeValue('', '-dark')}.gif`
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
            src={mainImage}
            alt="main-img"
            />
          </Box>
          </Section>
            <Heading
                as="h3"
                fontSize={20}
                mb={10}
                variant="section-title"
            >
                Projects
            </Heading>
            <SimpleGrid
                columns={[1,1,2]} gap={6}
            >
                <Section>
                    <ProjectGridItem
                        id="pldUi"
                        thumbnail={thumbPldUi}
                        title="PLD - UI"
                    >
                        Information system website for medical school Universitas Indonesia
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem
                        id="piki"
                        thumbnail={thumbPiki}
                        title="PIKI"
                    >
                        Information system website for Persatuan Intelegensia Kristen Indonesia
                    </ProjectGridItem>
                </Section>
                <Section>
                <ProjectGridItem
                    id="silandak"
                    thumbnail={thumbSilandak}
                    title="Silandak"
                >
                    A Management and Reporting System.
                </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem
                        id="barcode"
                        thumbnail={thumbBarcode}
                        title="Barcode Generator"
                    >
                        This system is used to scan barcodes for heavy equipment 
                        companies that will check equipment that has been sold or purchased.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem
                        id="credit"
                        thumbnail={thumbCredit}
                        title="Credit Website System"
                    >
                        This system is used to check banking transactions
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem
                        id="interfast"
                        thumbnail={thumbInterfast}
                        title="InterFast Delivery Service System"
                    >
                        This is a delivery service website, 
                        this system is specifically for operators who will process delivery data
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects