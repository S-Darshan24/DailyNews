import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updatenews = async () => {
    //  props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=259b98d0e2dc45ef95ddb66036c17fd5&page=${page} &pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    //props.setProgress(100);
  }
  document.title = `${capitalizeFirstLetter(props.category)} - NewsDaliy`;
  useEffect(() => {
    updatenews();
  }, []);

  const afetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=259b98d0e2dc45ef95ddb66036c17fd5&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    //  this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };
  
  return (
    <>
      <h1 className="text-center my-4">NewsDaily-Top <strong>{capitalizeFirstLetter(props.category)}</strong>  Headlines</h1>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={afetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row">
            {!loading && articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'us',
  pageSize: 5,
  category: 'general'
};
News.PropType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News
