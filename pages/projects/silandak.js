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
                SILANDAK <Badge>2020</Badge>
            </Title>
            <P>
            Management and Reporting System Website created to facilitate access to data 
            reporting and facilitate data processing in the form of complaints. There are so many advantages to using this complaint system.
            </P>
            <List 
                ml={4}
                my={4}
            >
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://lpmai.uksw.edu/silandak/">
                        https://lpmai.uksw.edu/silandak/
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
                    <span>PHP, HTML, CSS, JavaScript, CodeIgniter 3.0, SQL</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/silandak_landing1.jpg" alt="silandak" />
            <ProjectImage src="/images/projects/silandak_landing2.jpg" alt="silandak" />
        </Container>
    )
}

export default Project