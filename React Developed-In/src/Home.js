import React, { Component } from 'react';
import { Divider, Grid, Header, Image, Card, Segment } from 'semantic-ui-react'
import style from './style/style.css'
import coffee from './img/coffee.png'
import people1 from './img/people1.jpg'
import people2 from './img/people2.jpg'
import people3 from './img/people3.jpg'
import people4 from './img/people4.jpg'

class Home extends Component {
    render() {
        return (
            <div className={style.body}>
                <Segment  vertical>
                    <Grid container verticalAlign='middle'>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Help Developers Just Like You
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Do you want to make extra money? Do you want to sell your programming skills to the markets?
                                This is the place where you could turn you knowledge into money!
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Help Your Company to let you get started Your Business Quickly
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs through millions of Developers.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image
                                size='large'
                                src={coffee}
                            />
                        </Grid.Column>
                    </Grid>
                </Segment>

                <Divider horizontal>Meet the Developers who have joined Developed-In</Divider>
                <Card.Group centered itemsPerRow={6} id='cardGroup'>
                    <Card
                        image={people1}
                        header='Elliot Baker'
                        meta='Android Developer'
                        description='Elliot is a android developer working in Google.'
                        extra={(<p>Total 16 Projects</p>)}
                    />
                    <Card
                        image={people2}
                        header='Elliot Baker'
                        meta='Android Developer'
                        description='Elliot is a android developer working in Google.'
                        extra={(<p>Total 16 Projects</p>)}
                    />
                    <Card
                        image={people3}
                        header='Elliot Baker'
                        meta='Android Developer'
                        description='Elliot is a android developer working in Google.'
                        extra={(<p>Total 16 Projects</p>)}
                    />
                    <Card
                        image={people4}
                        header='Elliot Baker'
                        meta='Android Developer'
                        description='Elliot is a android developer working in Google.'
                        extra={(<p>Total 16 Projects</p>)}
                    />
                </Card.Group>
            </div>
        );
    }
}

export default Home;