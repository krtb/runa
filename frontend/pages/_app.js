import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { Component } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps, apollo}) {
	return (
		<ApolloProvider>
			<Page>
				<Component {...pageProps}/>
			</Page>
		</ApolloProvider>
	);
}

// await context, ctx, before rendering props
MyApp.getInitialProps = async function({Component, ctx}){
	let pageProps = {};
	if(Component.getInitialProps){
		pageProps = await Component.getInitialProps(ctx)
	}
	// make props available at a page level
	pageProps.query = ctx.query
	return pageProps;
}
// send App, but inject apollo client alongside, with help of Provider function
export default withData(MyApp);