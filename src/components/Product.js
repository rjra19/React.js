import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class Product extends Component {
    
    render() { 
        
        return ( 
          <div>
              <h3>hello from product</h3>
          </div>  
        );
    }
}
const ProductWrapper = styled.div`
`
 
export default Product;