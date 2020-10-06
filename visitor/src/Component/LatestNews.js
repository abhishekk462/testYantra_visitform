
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './latestnews.css'

class LatestNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []

        };
    }

    componentDidMount() {
        fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-06&sortBy=publishedAt&apiKey=21fbe9d7b40942d4a4bad31a6ece18b4")
            .then(response => response.json())
            .then(albums => { this.setState({ albums: albums.articles, Loaded: true, }) },
                error => { this.setState({ Loaded: true, error }); })
    }


    render() {
        const { albums } = this.state;
        return (
            <div className="visit_card">
                {albums.map(album => (

                    <Card className="visit_card_design">
                        <CardImg top width="100%" src={album.urlToImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="title">{album.title}</CardTitle>
                            <CardSubtitle className="subtitle">{album.content}</CardSubtitle>
                            <CardText className="description">{album.description}</CardText>
                        </CardBody>
                    </Card>


                ))}

            </div>

        )

    }


}

export default LatestNews;