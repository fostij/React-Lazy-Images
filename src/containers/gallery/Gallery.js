import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadImages } from './actions';
import {Heading} from '../../components/Heading';
import {Loader} from '../../components/Loader';
import {UnsplashImage} from '../../components/UnsplashImage';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component';

// Style
const GlobalStyle = createGlobalStyle`
    * 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body 
    {
        font-family: sans-serif;
    }
`;

console.log(process.env);

const WrapperImage = styled.section`
    max-width: 40rem;
    margin: 4rem auto;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 400px;
    

`;

class Gallery extends Component { 

    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        
        return(
            <div>
               <Heading />
               <GlobalStyle />
               <InfiniteScroll
               dataLength={this.props.pictures.length}
               next={this.props.loadImages}
               hasMore={true}
               loader={<Loader />}
               >
               <WrapperImage>
                    {this.props.pictures.map(image => (
                        <UnsplashImage url={image.urls.thumb} key={image.id}/>
                    ))}
               </WrapperImage>
               </InfiniteScroll>
            </div>
        )
    }
}

export default connect(
    state => ({
        pictures: state.gallery.pictures,
        isLoading: state.gallery.isLoading,
    }), {
        loadImages
    }
)(Gallery);
