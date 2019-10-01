import React from 'react';
import Document, {DocumentContext, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet(),
			originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	public render(): JSX.Element {
		return (
			<html lang="en">
			<Head>
				<meta charSet="utf-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
				/>
				<meta name="theme-color" content="#000000"/>
				<link rel="icon" href="/static/favicon.ico"/>
				<link rel="apple-touch-icon" href="static/logo192.png"/>
				<link rel="manifest" href="static/manifest.json"/>
			</Head>
			<body>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<Main/>
			<NextScript/>
			</body>
			</html>
		);
	}
}
