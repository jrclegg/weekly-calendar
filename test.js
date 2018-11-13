import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.css';
import {Button} from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Slider from 'react-rangeslider';

class Horizontal extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 7.5,
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value,
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };


  render (){
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={7.5}
          start={7.5}
          step={0.5}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>"{value}"</div>
      </div>
    )
  }
}

class Table extends React.Component {
    // The constructor defines the initial state of the component
    constructor(props){
        super(props);
        this.state = {
          value: "",
        }
      this.handleClick = this.handleClick.bind(this);
    }

      handleClick(e) {
       this.setState({
          slider: "<Horizontal/>",
       });
   }
    // Invoked after a component is mounted. If you need to load
    // data from a remote endpoint this is a good place to instantiate
    // the request
    componentDidMount(){
        const url = 'http://localhost:8080/calendar';

        fetch(url)
        .then(function(results) {
            return results.json();
        })
        .then((data) => {
            this.setState({data});
            console.log(this.state.data);
        });
    }

    dataHandle() {
        if(this.state.data){

            return this.state.data.map(function(item, index) {

                return <div>{item.project_name}</div>;
            })
        } else {
            return <div>''</div>;
        }
    }

    renderSlider() {
        if (this.state.slider){

            return <div>
                      <div>{this.dataHandle()[0]}<Horizontal/>
                      </div>
                  </div>;
        }

        else {
              return '';
        }

    }

    // this.state.props ? this.state.props[0].project_name : 'filler string'
    render() {
        return (
        <div>
          <div className="Table">
              <div className="Title">
                  <p>This is a Table</p>
              </div>
              <div className="Heading">
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p>Monday</p>
                  </div>
                  <div className="Cell">
                      <p>Tuesday</p>
                  </div>
                  <div className="Cell">
                      <p>Wednesday</p>
                  </div>
                  <div className="Cell">
                      <p>Thursday</p>
                  </div>
                  <div className="Cell">
                      <p>Friday</p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>Andy</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[0]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[1]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[2]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[3]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[4]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[5]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[6]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[7]}</a>
                          <a onClick={this.handleClick} href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <div>{this.renderSlider()}</div>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>James T</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>Jonathan</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>Armela</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>Dan</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>Chris</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>James B</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
              <div className="Row">
                  <div className="Cell name dropdown">
                      <p>Andris</p>
                      <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                        <div className="dropdown-content">
                          <a href="#">{this.dataHandle()[0]}</a>
                          <a href="#">{this.dataHandle()[1]}</a>
                          <a href="#">{this.dataHandle()[2]}</a>
                          <a href="#">{this.dataHandle()[3]}</a>
                          <a href="#">{this.dataHandle()[4]}</a>
                          <a href="#">{this.dataHandle()[5]}</a>
                          <a href="#">{this.dataHandle()[6]}</a>
                          <a href="#">{this.dataHandle()[7]}</a>
                          <a href="#">{this.dataHandle()[8]}</a>
                        </div>
                      </button>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
                  <div className="Cell">
                      <p></p>
                  </div>
              </div>
          </div>
        </div>
        );
    }
}

 ReactDOM.render(<Table/>, document.getElementById('root'));
