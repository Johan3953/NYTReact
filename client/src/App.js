import React, { Component } from "react";
import Nav from "./components/Nav/Nav"
import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Search from "./components/Search/Search";
import Button from "./components/Button";
import { NYTResults, NYTResultsItem } from "./components/NYTResults";
import Input from "./components/Input/Input";
import API from "./utils/API";
// import { Saved, SavedArticle } from "./components/Saved";
import { Container, Row, Col } from "./components/Grid";




class App extends Component {
    state = {
        articles: [],
        articleSearch: "",
        // beginYearSearch: "",
        // endYearSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.articleSearch)
            .then(res => { this.setState({ articles: res.data })})
            .catch(err => {console.log(err)});
    };

    render() {
     return (
     	<div>
         	<Nav />
         		<Jumbotron />
         		     <Container>
          				<Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
         		<h3>Search Topic</h3>
         				<Input
         					name="articleSearch"
         					value={this.state.articleSearch}
         					onChange={this.handleInputChange}
         					placeholder="Search for article topic..."/>
         		<h3>Start Year</h3>
         				<Input
         					name="articleSearch"
         					value={this.state.beginYear}
         					placeholder="Start Year.."/>
         		<h3>End Year</h3>
         				<Input
         					name="articleSearch"
         					value={this.state.endYear}
         					placeholder="End Year..." />
         					  </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg">
                        Search
                      </Button>
                      </Col>
                      </Row>
                      </Container>
         					</form>
         					</Col>
         					</Row>
								<Row>
            <Col size="xs-12">
              {!this.state.articles.length ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
                <NYTResults>
                  {this.state.articles.map(article => {
                    return (
                      <NYTResultsItem
                        key={article.headline.main}
                        title={article.headline.main}
                        summary={article.snippet}
                        href={article.web_url}
                      />
                    );
                  })}
                </NYTResults>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
	}
}

export default App;
