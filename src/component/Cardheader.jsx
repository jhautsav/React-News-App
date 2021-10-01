import React, { Component } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class Cardheader extends Component {
  static defaultProps = {
    country: "in",
    category: "genral",
    hed: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    hed: PropTypes.string,
  };
  constructor(props) {
    //first run constructor than after another cycle method
    super(props);
    console.log("hello i am constructor form cardheader");

    //state always intilize in constructor
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title=`${this.props.category} -UtsavNews`;
  }
  async updateItem() {
    this.setState({ loading: true });
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcbca88d707a4e7699ce8277d581cd20&page=${this.state.page}`
    );

    const data = await response.json();

    console.log(data);
    this.setState({ articles: data.articles, loading: false });
  }

  async componentDidMount() {
    this.updateItem();
  }
  preHandler = () => {
    this.setState({ page: this.state.page - 1 });
    this.updateItem();
  };
  nextHandler = () => {
    console.log("next");
    this.setState({ page: this.state.page + 1 });
    this.updateItem();
  };
  render() {
    return (
      <>
        <div className=" container my-5">
          <h1 className="text-center">
            {" "}
            Top Headline News OF {this.props.hed}
          </h1>
          {this.state.loading ?<Spinner />:
            <div className="row">
            {this.state.articles.map((val, ind) => {
              return (
                <Card
                  key={ind}
                  author={val.author ? val.author : "Unknown"}
                  imgurl={
                    val.urlToImage
                      ? val.urlToImage
                      : "https://images.livemint.com/img/2021/10/01/600x338/INDIA-AIR-8_1633068015912_1633068040444.jpg"
                  }
                  title={val.title ? val.title  : ""}
                  url={val.url ? val.url : ""}
                  desc={val.description ? val.description  : ""}
                  publishedAt={val.publishedAt ? val.publishedAt : ""}
                  source={val.source.name}
                />
              );
            })}
          </div>
          }
          
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.preHandler}
            >
              &larr;pre
            </button>
            <button className="btn btn-dark" onClick={this.nextHandler}>
              next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
