Specify absolute `source` path and relative `destination` path using plugin options.

```js
{
	resolve: '@jacobmischka/gatsby-plugin-copy-files',
	options: {
		source: `${__dirname}/src/public`,
		destination: ''
	}
},
{
	resolve: '@jacobmischka/gatsby-plugin-copy-files',
	options: {
		source: `${__dirname}/src/images`,
		destination: '/images'
	}
}
```

Must be used with `gatsby-source-filesystem`.
