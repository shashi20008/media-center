import React, { Component } from 'react';
import '../css/ListSection.less'

class ListSectionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 'series',
      list: []
    }

    const self = this;
    setTimeout(function() {
      self.setState({
        list: [{
          name: 'Harry potter',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX150.jpg',
          selected: true
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }, {
          name: 'The Expanse',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150.jpg'
        }]
      });
    }, 1000);
  }

  left() {
    const selectedItm = this.state.list.find(item => item.selected);
    const selectedIdx = this.state.list.indexOf(selectedItm);
    if(!selectedItm || selectedIdx <= 0) {
      selectedItm && (selectedItm.selected = false);
      this.setState({});
      return false;
    }

    selectedItm.selected = false;
    this.state.list[selectedIdx - 1].selected = true;
    this.setState({});
    return true;
  }

  right() {
    const selectedItm = this.state.list.find(item => item.selected);
    const selectedIdx = this.state.list.indexOf(selectedItm);

    if(selectedItm && (selectedIdx + 1) >= this.state.list.length) {
      return false;
    }

    selectedItm && (selectedItm.selected = false);
    (this.state.list[selectedIdx + 1] || this.state.list[0]).selected = true;
    this.setState({});
    return true;
  }

  up() {
    return true;
  }

  down() {
    return true;
  }

  render() {
    return (
      <div className="list-section">
        {
          this.state.list.map(item => 
            <div className={ 'list-item ' + (item.selected ? 'selected' : '') } 
              style={ {'background-image': 'url(' + item.poster + ')' } } 
              tabindex="-1" 
              ref={
                listItem => listItem && item.selected && listItem.focus()
              }>
              <div className="title-name">{item.name}</div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ListSectionContainer;