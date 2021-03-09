import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import { Card } from 'react-bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.product = props.product;
    this.selectedProduct = props.selectedProduct
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  defaultStyle(product) {
    var defaultStyle = this.product.styles[0];;
    if (this.product.styles.length < 2) {
      defaultStyle = this.product.styles[0];
    } else {
      this.product.styles.forEach(style => {
        if (style['default?']) {
          defaultStyle = style;
        }
      });
    }
    return defaultStyle;
  }

  render () {
    var dfStyle = this.defaultStyle(this.product);
    console.log(this.place)
    return (
      <div>
        <Card style={{ width: '18rem', height: '33rem' }} className="product-card carousel-item">
        <div className="img-overlay">
            <button type="button" className="btn btn-default brn-xs" onClick={() => this.handleClick()}>⭐</button>
          </div>
          <Card.Img variant="top" style={{ width: 'auto', height: '22rem' }} src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></Card.Img>
          <Card.Body>
            <Card.Text className="text-uppercase"><small>{this.product.category}</small></Card.Text>
            <Card.Text><strong>{this.product.name}</strong><br></br>{`${this.product.slogan}`}</Card.Text>
            <Card.Text><small>${this.product.default_price}</small></Card.Text>
            <Card.Text>{this.product.averageRating ? `*# of stars*: ${this.product.averageRating}` : null}</Card.Text>
            <Card.Text>{this.product.reviews.length ? `${this.product.reviews.length} reviews` : null}</Card.Text>
          </Card.Body>
        </Card>
        <div>
          {this.state.clicked ? <ComparisonModal selectedProduct={this.selectedProduct} product={this.product} onClick={this.handleClick}/> : null}
        </div>
      </div>
    );
  }
};

export default RelatedProduct;

/*
this.product.styles[0].photos[0].thumbnail_url
*/