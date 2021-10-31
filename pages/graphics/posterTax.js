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
                Online Tax Activity Poster <Badge>2020</Badge>
            </Title>
            <P>
                This poster invites you to pay taxes online and independently.
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
                    <span>Design Poster for the final project of STAN (Sekolah Tinggi Akuntansi Negara) students</span>
                </ListItem>
            </List>

            <GraphicImage src="/images/graphics/poster_Tax.jpg" alt="poster" />
            <GraphicImage src="/images/graphics/poster_Tax2.jpg" alt="poster" />
        </Container>
    )
}

export default Graphic