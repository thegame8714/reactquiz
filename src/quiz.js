/**
 * Created by Fabio on 18/08/15.
 */
'use strict';

var Question_Type = React.createClass({
   render: function() {
       return (
           <select className="qurestiontype">
                <option name="fillthegap" value="fillthegap">Fill the gap</option>
                <option name="yesno" value="yesno">Yes/No</option>
                <option name="multipleanswer" value="multipleanswer">Multiple Answer</option>
           </select>
       );
   }
});

var Question = React.createClass({
   render: function() {
       return (
           <div>
           <h1>This is question number {this.props.count + 1} </h1>
            <Question_Type onChange={this.props.selectType} />
       </div>
       );
   }
});

var Quiz = React.createClass({
    getInitialState: function() {
      answers = []
    },

    render: function() {
        var rows = [];
        for (var i=0; i<this.props.numberOfQuestion; i++) {
            rows.push(<Question count={i} />);
        }
        return (
            <div className="well">
            {rows}
        </div>
        );
    }
});
React.render(
<Quiz numberOfQuestion="10" />,
    document.getElementById('content')
);