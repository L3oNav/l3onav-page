import React, { Component } from 'react';
import { connect } from 'react-redux';

class LangSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: true
        }
        this.handlerClickBtnLang = this.handlerClickBtnLang.bind(this)
    }

    handlerClickBtnLang = () => {
        this.setState(state => ({
            languages: !state.languages
        }))
    }

    render() {
        return (
          <div className="LangSelector-cont">
            <button
              className="btn-lang icon-lang"
              onClick={this.handlerClickBtnLang}
            />
            <ul className="container-selector">
              {this.state.languages ? (
                <div>
                  <li className="li-es">
                    <button className="btn-es">Es</button>
                  </li>
                  <li className="li-es">
                    <button className="btn-us">Us</button>
                  </li>
                </div>
              ) : null}
            </ul>
          </div>
        );
    }
}



export default LangSelector;