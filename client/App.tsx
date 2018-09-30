import * as React from 'react';
import styled, { css } from 'react-emotion';

const Wrapper = styled('div')((props: {}): string => {
    return css`
        color: blue;
    `
})

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>Hello, World!</Wrapper>
        );
    }
}