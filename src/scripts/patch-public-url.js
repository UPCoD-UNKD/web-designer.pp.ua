const fs = require('fs')
const path = require('path')
const replaceStream = require('replacestream')

const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs-extra')
const PUBLIC_PATH = path.resolve(__dirname, 'build')
const PORT = parseInt(process.env.PORT || '3000', 10)
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`
const indexHtml = path.join(PUBLIC_PATH, 'index.html')
const indexHtmlContent = fs

// .readFileSync(indexHtml, "utf-8")
// .replace(/__PUBLIC_URL_PLACEHOLDER__/g, PUBLIC_URL)
// .replace(/window\.__PUBLIC_URL__=""/, `window.__PUBLIC_URL__="${PUBLIC_URL}"`);

app.get('/', (req, res) => {
	res.send(indexHtmlContent)
})

app.use(express.static(path.join(PUBLIC_PATH)))
app.listen(PORT)

const main = async () => {
	const directory = path.join(__dirname, '..', 'build', 'static', 'js')
	const files = fs
		.readdirSync(directory)
		.filter(file => file.endsWith('.js'))
		.map(fileName => path.join(directory, fileName))

	for (const file of files) {
		const tmpFile = `${file}.tmp`
		await new Promise((resolve, reject) => {
			const stream = fs
				.createReadStream(file)
				.pipe(
					replaceStream(
						'"__PUBLIC_URL_PLACEHOLDER__"',
						' window.__PUBLIC_URL__ '
					)
				)
				.pipe(
					replaceStream(
						'"__PUBLIC_URL_PLACEHOLDER__/"',
						' window.__PUBLIC_URL__+"/"'
					)
				)
				.pipe(fs.createWriteStream(tmpFile))
			stream.on('finish', resolve)
			stream.on('error', reject)
		})
		fs.unlinkSync(file)
		fs.copyFileSync(tmpFile, file)
		fs.unlinkSync(tmpFile)
	}
}

main().catch(err => {
	console.error(err)
	process.exitCode = 1
})
