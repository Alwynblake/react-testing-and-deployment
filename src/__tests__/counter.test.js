import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

//set up Enzyme library to use new form of React
Enzyme.configure({ adapter: new Adapter() });

describe('Testing our Counter component', () => {
  it('Counter changes -up- state on Click', () => {
    let app = mount(<Counter/>);
    let upbutton = app.find('.up');
    expect(upbutton).toBeDefined();
    expect(app.state('count')).toBe(0);
    upbutton.simulate('click');
    expect(app.state('count')).toBe(1);
  });

    it('Counter changes -down- state on Click', () => {
      let app = mount(<Counter/>);
      let downbutton = app.find('.down');
      expect(downbutton).toBeDefined();
      expect(app.state('count')).toBe(0);
      downbutton.simulate('click');
      expect(app.state('count')).toBe(-1);
    });

  it('should ', function () {
    let app = mount(<Counter/>);
    let page = app.find('.count');
    expect(page).toBeDefined();
  });

  it('render correctly', () => {
      const renderTree = renderer.create(<Counter />).toJSON();
      expect(renderTree).toMatchSnapshot();
    })
  });

