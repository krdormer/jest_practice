import React from 'react';
import { mount } from 'enzyme';
// import App from 'components/App';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />)
});

afterEach(() => {
    // Cleans up component after each test 
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('empty textarea when form is submitted', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });
    wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})