/**
 * Created by Fabio on 18/08/15.
 */
'use strict';

var MulipleAnswer = React.createClass({
  render: function() {
    return (<span>This needs to be implemented</span>);
  }
});

var FillTheGap = React.createClass({
  render: function() {
    return (<span>This needs to be implemented</span>);
  }
});

var Question_Type = React.createClass({
    getInitialState:function(){
      return {selectValue:''};
  },
    handleChange:function(e){
    this.setState({selectValue:e.target.value});
  },
  render: function() {
    var answertype=this.state.selectValue;
    var answers,button;

    switch(answertype) {
      case 'yesno':
        answers = (<div><label>
                    <input type="radio" name="yesno_radio" value="Yes"/>
                    <span>Yes</span>
                </label>
                <label>
                    <input type="radio" name="yesno_radio" value="No"/>
                    <span>No</span>
                </label></div>); 
        break;
      case 'multipleanswer':
        answers = (<div><label>
                    <input type="checkbox" name="yesno_check" value="0"/>
                    <span>Yes</span>
                </label>
                <label>
                    <input type="checkbox" name="yesno_check" value="0"/>
                    <span>No</span>
                </label></div>);
        break;
      case "fillthegap":
        answers = (<input type="text" value="this is the answer" />);
        break;
      default:
        answers = (<label>No type selected yet</label>);
    }

    return (
      <div>
      <select value={this.state.selectValue} onChange={this.handleChange} >
        <option value="">Select an answer type</option>
        <option value="yesno">Yes/No</option>
        <option value="multipleanswer">Multiple Answer</option>
        <option value="fillthegap">Fill the gap</option>
      </select>
      <div>{answers}</div>
      </div>        
    );
  }
});

var Question = React.createClass({
   render: function() {
       return (
           <div>
           <h3>Question {this.props.numberOfQuestion}:</h3>
           <input type="text" name="question{this.props.numberOfQuestion}" />
            <Question_Type />
            <button onClick={this.props.addQuestion}>Add Question</button>
            <button onClick={this.props.removeQuestion}>Remove Question</button>
       </div>
       );
   }
});

var Quiz = React.createClass({
    getInitialState: function() {
        return {
          numberOfQuestion: 1,
          rows: [],
          addNew: true
        };
    },
    addQuestion: function () {
      this.setState({
        numberOfQuestion: this.state.numberOfQuestion + 1,
        addNew: true
      });
    },
    removeQuestion: function () {
      console.log(this.state.numberOfQuestion);
      if(this.state.numberOfQuestion > 1) {
        this.setState({
        numberOfQuestion: this.state.numberOfQuestion - 1,
        addNew: false
      });
      }
      // if(this.state.numberOfQuestion == 1) {
      //  this.setState({
      //   // numberOfQuestion: this.state.numberOfQuestion - 1,
      //   addNew: false
      // });
      // }
    },
    render: function() {
        var rows = this.state.rows;
        var noq = this.state.numberOfQuestion;
        var addNew = this.state.addNew;
        console.log(noq);
        if(addNew) {
           rows.push(<Question numberOfQuestion={noq} 
                            addQuestion={this.addQuestion}
                            removeQuestion={this.removeQuestion} />);  
         }else {
          if(noq > 1) {
            rows.pop();  
          }
          else {
            if(noq == 1) {
              alert("You can't have 0 questions");
            }
          }
            
         }
        
       
        return (
            <div className="well">
            {rows}
        </div>
        );
    }
});
React.render(
<Quiz />,
    document.getElementById('content')
);