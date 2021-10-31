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
                Barcode Generator <Badge>2020</Badge>
            </Title>
            <P>
            This website is used by heavy equipment companies to process incoming and outgoing transaction data.
            Barcode Generator used to scan tools that are sold.
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

            <ProjectImage src="/images/projects/barcode_generator1.jpg" alt="barcode" />
            <ProjectImage src="/images/projects/barcode_generator2.jpg" alt="barcode" />
        </Container>
    )
}

export default Project