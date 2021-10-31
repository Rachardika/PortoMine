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
                PLD-UI <Badge>2020</Badge>
            </Title>
            <P>
                This website is used by Universitas Indonesia Medical Faculty students to become their platform for accessing 
                seminars and as a means to find the latest news related to Medical Faculty.
            </P>
            <List 
                ml={4}
                my={4}
            >
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.pld-ui.com/">
                        https://www.pld-ui.com/
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
                    <span>NodeJS, React JS, Next JS, Chakra-Ui, Material UI</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/pld_ui1.jpg" alt="pld-ui" />
            <ProjectImage src="/images/projects/pld_ui2.jpg" alt="pld-ui" />
        </Container>
    )
}

export default Project