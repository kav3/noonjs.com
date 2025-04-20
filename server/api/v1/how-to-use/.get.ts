export default defineCachedEventHandler((event) => {
    const { type, file } = getQuery(event)
    return fetch(!file ? `https://api.github.com/repos/noonjs/how-to-use/contents/${type}` : `https://raw.githubusercontent.com/noonjs/how-to-use/main/${type}/${file}`).then(x => x.text())
}, { maxAge: 60 * 60 })