import { Loader } from "../Loader/Loader";
import { SearchBar } from "components/SearchBar/Searchbar";
import { Button } from "../Button/Button";

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
        <SearchBar onSubmit={this.handleSubmit}/>  
        {this.state.images.length > 0 && <div>Gallery</div>}
        <Button onClick={this.handleLoadMore}/>
    </div>
  );
}
};

/*<Loader>{Audio}</Loader>*/

/*<button onClick={this.handleLoadMore}>Load more</button>*/

/*Scroll:
const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    window.scrollTo(0, height);*/