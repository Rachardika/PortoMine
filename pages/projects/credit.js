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
                QR | Barcode Generator <Badge>2019</Badge>
            </Title>
            <P>
            This website system used by users for a money credit system, users can check the date they have to pay
             the borrowed money where the money to be returned has been added to tax or interest
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

            <ProjectImage src="/images/projects/credit1.jpg" alt="barcode" />
            <ProjectImage src="/images/projects/credit2.jpg" alt="barcode" />
        </Container>
    )
}

export default Project