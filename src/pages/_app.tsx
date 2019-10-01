import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from '../client/core/styles/global';
import theme from '../client/core/styles/theme';
import Layout from '../client/blocks/Layout';

class MyApp extends App {
	public render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return (
			<>
				<Head>
					<title>Hawaiian Pigs</title>
					<meta
						name="description"
						content="Web site created Hawaiian Pigs"
					/>
				</Head>
				<ThemeProvider theme={theme.main}>
					<>
						<GlobalStyles/>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</>
				</ThemeProvider>
			</>
		);
	}
}

export default MyApp;
