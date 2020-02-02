import PostForm from '../components/PostForm';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('Les champs sont bien remplis', () => {
    it('test ID', () => {        
        const { container, getByTestId } = render(
        <PostForm />
    );      
        fireEvent.change(container.querySelector('#id'), {target : { value : 1}});
        expect(getByTestId('id').value).toBe('1');
        fireEvent.change(container.querySelector('#lastName'), {target : { value : 'aaa'}});
        expect(getByTestId('lastName').value).toBe('aaa');
        fireEvent.change(container.querySelector('#firstName'), {target : { value : 'bbb'}});
        expect(getByTestId('firstName').value).toBe('bbb');
        expect(getByTestId('button').disabled).toBe(false);
    });
  });

describe('Les champs sont mal remplis', () => {
    it('test ID', () => {        
        const { container, getByTestId } = render(
        <PostForm />
    );      
        fireEvent.change(container.querySelector('#id'), {target : { value : 2}});
        expect(getByTestId('id').value).toBe('2');
        fireEvent.change(container.querySelector('#lastName'), {target : { value : ''}});
        expect(getByTestId('lastName').value).toBe('');
        fireEvent.change(container.querySelector('#firstName'), {target : { value : 'ccc'}});
        expect(getByTestId('firstName').value).toBe('ccc');
        expect(getByTestId('button').disabled).toBe(true);
    });
  });

  describe('Un string au lieu d un int', () => {       
    it('test ID', () => {        
        const { container, getByTestId } = render(
        <PostForm />
    );      
        fireEvent.change(container.querySelector('#id'), {target : { value : 'ddd'}});
        expect(getByTestId('id').value).toBe('');
        fireEvent.change(container.querySelector('#lastName'), {target : { value : 'eee'}});
        expect(getByTestId('lastName').value).toBe('eee');
        fireEvent.change(container.querySelector('#firstName'), {target : { value : 'fff'}});
        expect(getByTestId('firstName').value).toBe('fff');
        expect(getByTestId('button').disabled).toBe(true);
    });
});