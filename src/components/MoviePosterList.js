import React from "react";
import { Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  movies: state.common.movies
});

const MoviePosterList = ({ movies, onClickDetails }) => {
  //const MovieCardItem = props => {
  // let movies = props.movies;

  return (
    <Row>
      {movies.map((movie, idx) => (
        <div key={movie.id}>
          <Col sm={6} md={4}>
            <Thumbnail
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="242x200"
            >
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>
                <Button
                  bsStyle="primary"
                  onClick={() => onClickDetails(movie.id)}
                >
                  Details
                </Button>
              </p>
            </Thumbnail>
          </Col>
          {(idx + 1) % 2 === 0 && <Clearfix visibleSmBlock />}
          {(idx + 1) % 3 === 0 && <Clearfix visibleMdBlock visibleLgBlock />}
        </div>
      ))}
    </Row>
  );
};

export default connect(mapStateToProps)(MoviePosterList);
