import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

const defaultStyle = (product) => {
  var defaultStyle = product.styles[0];;
  if (product.styles.length < 2) {
    defaultStyle = product.styles[0];
  } else {
    product.styles.forEach(style => {
      if (style['default?']) {
        defaultStyle = style;
      }
    });
  }
  return defaultStyle;
};

const OutfitItem = (props) => {
  var dfStyle = defaultStyle(props.product);

  return (
    <React.Fragment>
      <Card style={{ width: '18rem', height: '33rem'}} className="product-card">
      <div className="img-overlay">
        <button type="button" className="btn btn-default brn-xs" onClick={() => props.removeItem(props.product.id)}>❌</button>
      </div>
        <Card.Img variant="top" style={{ width: 'auto', height: '22rem' }} src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></Card.Img>
        <Card.Body>
          <Card.Text className="text-uppercase"><small>{props.product.category}</small></Card.Text>
          <Card.Text><strong>{props.product.name}</strong><br></br>{`${props.product.slogan}`}</Card.Text>
          <Card.Text><small>${props.product.default_price}</small></Card.Text>
          <Card.Text>{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</Card.Text>
          <Card.Text>{props.product.reviews.length ? `${props.product.reviews.length} reviews` : null}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default OutfitItem;
