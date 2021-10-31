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
    ProjectImage,
    Meta
} from '../../components/projects'
import P from '../../components/Paragraph'


const Project = () => {
    return (
        <Container>
            <Title>
                PIKI <Badge>2021</Badge>
            </Title>
            <P>
            This website is used by members of PIKI (Persatuan Intelegensia Kristen Indonesia) throughout Indonesia to 
            contain news and information related to the development of the organization.
            </P>
            <List 
                ml={4}
                my={4}
            >
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://piki.or.id/">
                        https://piki.or.id/
                        <ExternalLinkIcon
                            mx="2px"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Wordpress, Elementor, HTML Script, JavaScript</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/piki1.jpg" alt="piki" />
            <ProjectImage src="/images/projects/piki2.jpg" alt="piki" />
        </Container>
    )
}

export default Project