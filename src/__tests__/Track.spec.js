import { create, act } from "react-test-renderer";
import React, { useState } from "react";
import Track from '../components/Track';

describe("Track component", () => {
    test('It should present the track song name', () => {
        let component;
        act(() => {
            component = create(< Track songName="Check" type='Track'/>);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'songName'});
        expect(p.props.children).toBe('Check');
    });

    test('It should present the track artist name', () => {
        let component;
        act(() => {
            component = create(< Track artist="Check" type='Artist'/>);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'songName'});
        expect(p.props.children).toBe('Check');
    });

    test('It should not present the track artist and album information', () => {
        let component;
        act(() => {
            component = create(< Track artist="Check" album='Check' type='Artist'/>);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'artist_album'});
        expect(p.props.children).toBe('');
    });

    test('It should present the track artist and album information', () => {
        let component;
        act(() => {
            component = create(< Track artist="Check" album='Check' type='Track'/>);
        });
        const instance = component.root;
        const p = instance.findByProps({className: 'artist_album'});
        expect(p.props.children).toBe('Check | Check');
    });
  });






  