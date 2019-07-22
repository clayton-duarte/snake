import React from 'react';
import App, { Container } from 'next/app';

import { reducer, initialState } from '../state/reducer';
import { StateProvider } from '../state';

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return pageProps;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </StateProvider>
    );
  }
}
