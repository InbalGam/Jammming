import React from "react";
import { create } from "react-test-renderer";
import SearchBar from '.../src/components/SearchBar';

describe("SearchBar component", () => {
    test('It should search for songs', () => {
        const search = create(<SearchBar />);
        expect(search.toJSON()).toMatchSnapshot();
    });
  });