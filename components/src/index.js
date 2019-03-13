import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments" >
      <ApprovalCard>
        <div>
        <h4>Warning</h4>
        Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam"
          timeAgo="Today @ 4:45pm"
          commentText="Nice job on the blog!!"
          avatar = {faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex"
          timeAgo="Today @ 2:00am"
          commentText="You could've done better."
          avatar = {faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane"
          timeAgo="Yesterday @ 5:00pm"
          commentText="Woo Hoo :)"
          avatar = {faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
