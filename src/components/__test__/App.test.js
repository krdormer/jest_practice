import React from 'react';
import ReactDOM from 'react-dom'; // Not needed for Enzyme 
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// Non Enzyme Code 
it('successfully renders app', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div)
}); //

let wrapped;

beforeEach(() => {
    // Wrapped = component with additional functionality on top 
    // Shallow is checking only provided component and no children 
    wrapped = shallow(<App />);
});

it('shows comment box', () => {
    // Returns an array of every instance of CommentBox found 
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comment list', () => {
    // Returns an array of every instance of CommentList found 
    expect(wrapped.find(CommentList).length).toEqual(1);
})