import React, { Component } from 'react';

class Iteration extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div>

        <h2>
          {this.props.titolo}
        </h2>

        <div className='listContainer'>

          {this.props.myArray &&
            this.props.myArray.length > 0 &&
            this.props.myArray.map((item, index) => {
              return (
                
                <div>
                  {
                    item.avatar + '' + item.nome + ' ' + item.cognome + ' ' + item.partito
                  }
                </div>

              )
            })
          }

        </div>

      </div>
    )
  }
}

export default Iteration
