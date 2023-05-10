// For learning testing//

import { create, act } from "react-test-renderer";
import React, { useState } from "react";

function Button(props) {
  const [text, setText] = useState("");
  function handleClick() {
    setText("PROCEED TO CHECKOUT");
  }
  return <button onClick={handleClick}>{text || props.text}</button>;
};

describe("Button component", () => {
    test('it shows the text before clicked', () => {
        let component;
      act(() => {
          component = create(<Button text="SUBSCRIBE TO BASIC" />);
      });
      const instance = component.root;
      const button = instance.findByType("button");
      expect(button.props.children).toBe("SUBSCRIBE TO BASIC");
    });

    test("it shows the expected text when clicked", () => {
      let component;
      act(() => {
          component = create(<Button text="SUBSCRIBE TO BASIC" />);
      });
      const instance = component.root;
      const button = instance.findByType("button");
      act(() => {
        button.props.onClick();
      });
      expect(button.props.children).toBe("PROCEED TO CHECKOUT");
    });
});


function Erase(props) {
    const [text, setText] = useState(props.text);
    function handleClick() {
        setText('');
    }
    return (
        <form>
            <input value={text} type='text' id='text' name='text'/>
            <button onClick={handleClick}>Click me</button>
        </form>
    );
};

describe('Erase component', () => {
    test('it erases the initial text when button clicked', () => {
        let component;
        act(() => {
            component = create(<Erase text='Nir'/>);
        });
        const instance = component.root;
        const button = instance.findByType('button');
        act(() => {
            button.props.onClick();
          });
        const input = instance.findByType('input');
        expect(input.props.value).toBe('');
    });
});