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
                InterFast <Badge>2018</Badge>
            </Title>
            <P>
           This website used for the delivery system of goods. This system is used by website operators to check goods to be sent to customers.
            </P>
            <List 
                ml={4}
                my={4}
            >
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>PHP, HTML, CSS, SQL, JavaScript, CodeIgniter3.0</span>
                </ListItem>
            </List>

            <ProjectImage src="/images/projects/interfast.jpg" alt="interfast" />
            <ProjectImage src="/images/projects/interfast2.jpg" alt="interfast" />
        </Container>
    )
}

export default Project