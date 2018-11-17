import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import { HeadingCells } from './components/ui-components/headingcells.js';
import User from './components/user';

const Calendar = styled.div`
  margin-top: 50px;
  margin-right: 60px;
`

const Title = styled.div`
  text-align: center;
  font-weight: ${props => props.theme.type.weights.bold};
  font-size: ${props => props.theme.type.sizes.large};
  color: ${props => props.theme.colors.primary};
`

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: ['Andy', 'James T', 'Jonathan', 'Armela', 'Carlos', 'Dan', 'Vicki', 'Andris']
    }
  }

  render() {
    const { users } = this.state
    return (
      <ThemeProvider theme={theme}>
        <Calendar>
          <Title>
            <h1>Weekly Work Schedule</h1>
          </Title>
          <HeadingCells />
          {users.map((user, index) => (
            <User key={index} name={user} />
          ))}
        </Calendar>
      </ThemeProvider>
    )
  }
}

// // // Render a React component to the DOM!
ReactDOM.render(<Table />, document.getElementById('root'));
