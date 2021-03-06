import { Header, Image, Table } from 'semantic-ui-react'

export default function AdminTable() {

    return (
        <Table basic='very' celled collapsing style={{ width: '100%' }}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Employee</Table.HeaderCell>
                    <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                            <Header.Content>
                                Lena
              <Header.Subheader>Human Resources</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                            <Header.Content>
                                Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>15</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                            <Header.Content>
                                Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>12</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                            <Header.Content>
                                Mark
              <Header.Subheader>Executive</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>11</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}