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
                Jogja Jaguars Basketball <Badge>2019</Badge>
            </Title>
            <P>
            This is a branding logo for the basketball community in Jogjakarta, Central Java.
            </P>
            <List 
                ml={4}
                my={4}
            >
                 <ListItem>
                    <Meta>MEDIA</Meta>
                    <Link href="https://www.instagram.com/jogjaguars/">
                        Open This Logo
                        <ExternalLinkIcon
                            mx="2px"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>TYPE</Meta>
                    <span>Logo Branding</span>
                </ListItem>
                <ListItem>
                    <Meta>ENGINE</Meta>
                    <span>Adobe Illustrator, Adobe Photoshop</span>
                </ListItem>
                <ListItem>
                    <Meta>DETAIL</Meta>
                    <span>Logo Branding Design for Basketball Community in Jogjakarta</span>
                </ListItem>
            </List>

            <GraphicImage src="/images/graphics/jogja_jaguar_Logo.png" alt="logo" />
            <GraphicImage src="/images/graphics/jogja_jaguar_Logo2.png" alt="logo" />
        </Container>
    )
}

export default Graphic