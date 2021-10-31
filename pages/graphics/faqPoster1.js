import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import {
    Title,
    GraphicImage,
    Meta
} from '../../components/graphics'
import P from '../../components/Paragraph'


const Graphic = () => {
    return (
        <Container>
            <Title>
                Frequently Asked Question Tax <Badge>2020</Badge>
            </Title>
            <P>
            This poster provides information to tax payers so that they do not make mistakes in paying taxes or making NPWP.
            </P>
            <List 
                ml={4}
                my={4}
            >
                <ListItem>
                    <Meta>TYPE</Meta>
                    <span>Poster Design</span>
                </ListItem>
                <ListItem>
                    <Meta>ENGINE</Meta>
                    <span>Adobe Illustrator, Adobe Photoshop</span>
                </ListItem>
                <ListItem>
                    <Meta>DETAIL</Meta>
                    <span>Design Poster for the internship project of STAN (Sekolah Tinggi Akuntansi Negara) students</span>
                </ListItem>
            </List>

            <GraphicImage src="/images/graphics/Faq_design.jpg" alt="poster" />
            <GraphicImage src="/images/graphics/Faq_design2.jpg" alt="poster" />
        </Container>
    )
}

export default Graphic