import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Modal} from 'semantic-ui-react'
import { Input} from 'semantic-ui-react'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            input: ""
        }
    }

    onSend = () => {
        this.setState({
            messages: [...this.state.messages, {from: 'user', value: this.state.input}],
            input: ""
        })
    };

    render() {
        return (
            <Modal size='tiny' dimmer={false} open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header content={"Chat with " + this.props.contact}/>
                <Modal.Content scrolling style={{minHeight: '500px'}}>
                    {this.state.messages.map((message)=> (
                        <Container
                            style={{wordWrap: 'break-word'}}
                            key={this.state.messages.indexOf(message)}
                            textAlign={message.from === 'user' ? 'right' : 'left'}
                        >
                            <p style={{fontSize: '20px'}}>{message.value}</p>
                        </Container>
                    ))}
                </Modal.Content>
                <Input
                    fluid size='big'
                    action={{ color: 'teal', content: 'Send', onClick: this.onSend}}
                    onChange={(e, {value})=> this.setState({input: value})}
                    value={this.state.input}
                />
            </Modal>
        )
    }
}

export default Chat;
