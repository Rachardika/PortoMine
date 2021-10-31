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
                GO-Kar <Badge>2018</Badge>
            </Title>
            <P>
                This poster invites to maintain heart health so that it can work optimally
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
                    <span>Design Poster for Poster Competition in UNS-Universitas Negeri Solo</span>
                </ListItem>
            </List>

            <GraphicImage src="/images/graphics/poster_graphic.jpeg" alt="poster" />
        </Container>
    )
}

export default Graphic