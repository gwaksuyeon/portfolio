import React from 'react';

class SelectGenderBtnContainer extends React.Component {

  state = {
    selected: 'female',
  }

  onClick = (e: React.MouseEvent) => {
    const { selected } = this.state;
    const dataType = e.currentTarget.getAttribute('data-type') as string;

    this.setState({
      selected: selected === dataType ? selected : dataType,
    })
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="selectGenderWrap">
        <div 
          className={`selectBtn ${selected === 'female'? '_active' : ''}`}
          data-type="female"
          onClick={this.onClick}
        >
          여자
        </div>
        <div 
          className={`selectBtn ${selected === 'male'? '_active' : ''}`}
          data-type="male"
          onClick={this.onClick}
        >
          남자
        </div>
      </div>
    )
  }
}

export default SelectGenderBtnContainer;
