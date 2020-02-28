import React from "react";
import { connect } from "react-redux";
import { getLanguage } from "../../Redux/actions/index";
import BoxBiography from '../BoxBiography/index.js';
import { ListConstacts } from '../ListContacts/index'

class Biography extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.language) {
      this.props.getLanguage()
    }
  }
  render() {
    const { language } = this.props;
    return (
      <div>
        <div className="biography-display">
          {language? 
            <BoxBiography
              title={language.title}
              Biography={language.biography}
            />: null
          }
        </div>
        <ListConstacts/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = {
  getLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Biography);
