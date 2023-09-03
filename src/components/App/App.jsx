import { Loader } from "../Loader/Loader";

const { Component } = require("react");



export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState({
      query: evt.target.elements.query.value,
      images: [],
      page:1
    });
}

  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState + 1,
    }));
   };

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query ||
      prevState.page !== this.state.page) {
      //HTTP REQUEST
    }
  }
  
/*
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
Your API key: 38422328-85a02d361c587760bb979b0d3;
*/


  render() {
    return (
    
      <div>React homework template
        
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {this.state.images.length > 0 && <div>Gallery</div>}
      <button onClick={this.handleLoadMore}>Load more</button>
    </div>
  );
}
};

/*<Loader>{Audio}</Loader>*/

/*Scroll:
const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    window.scrollTo(0, height);*/