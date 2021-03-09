import React, { useState } from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { Container, Row, Col, CardDeck, CardGroup } from 'react-bootstrap';


const RelatedProductsList = (props) => {

  if (props.relatedProducts.length > 0) {
    var place = 0;
    return (
      <React.Fragment>

          <CardDeck className="related-products-list">
            {props.relatedProducts.map(product => {
              place += 1;
              return (
                <RelatedProduct place={place} product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
              );
            })}
          </CardDeck>

      </React.Fragment>
    )
  } else {
    return null;
  }
};

export default RelatedProductsList;

/*
        {props.relatedProducts.map(product => {
          return (
            <Carousel.Item>
              <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
            </Carousel.Item>
          );
        })}
*/

/*
       <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[0]} key={props.relatedProducts[0].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[1]} key={props.relatedProducts[1].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[2]} key={props.relatedProducts[2].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[3]} key={props.relatedProducts[3].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
*/