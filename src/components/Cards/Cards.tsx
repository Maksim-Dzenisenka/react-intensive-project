import React from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import '../Cards/Cards.css'

export default function Cards({ data }) {
    return (
        <>
            <h1>Films</h1>
            <Grid columns={3}>
                {data.map((film, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{film.title}</Card.Header>
                                    <Card.Description>
                                        <strong>Description</strong>
                                        <p>{film.opening_crawl}</p>
                                        <Button>Show more</Button>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}