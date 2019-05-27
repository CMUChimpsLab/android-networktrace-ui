module.exports = {
    port: process.env.PORT || 8000,
    files: ['./**/*.{html,htm,css,js,jpg}'],
    server:{
        baseDir: "docs"
    },
    notify: false
};