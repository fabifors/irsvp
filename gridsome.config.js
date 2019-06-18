// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'iRSVP',
  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/*.md',
        typeName: 'Post'
      }
    }
  ]
}
