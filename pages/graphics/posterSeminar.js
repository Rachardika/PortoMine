import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
                Expo-SMANSSA <Badge>2018</Badge>
            </Title>
            <P>
            this is information poster for seminar activities in Senior High School 1 Salatiga.
            </P>
            <List 
                ml={4}
                my={4}
            >
                 <ListItem>
                    <Meta>MEDIA</Meta>
                    <Link href="https://www.instagram.com/p/BsshnL6HTCg/?utm_source=ig_web_copy_link">
                        Open This Poster
                        <ExternalLinkIcon
                            mx="2px"
                        />
                    </Link>
                </ListItem>
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
                    <span>Design Poster for EXPO Senior High School 1 Salatiga</span>
                </ListItem>
            </List>

            <GraphicImage src="/images/graphics/poster_seminar.jpeg" alt="poster" />
        </Container>
    )
}

export default Graphic