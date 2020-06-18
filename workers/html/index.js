async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(someHTML, init)
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})
const someHTML =  `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>on the global information superhighway</title>
    <link rel="stylesheet" href="http://files.ffettes.workers.dev/styles.css">
	</head>
	<body>
    <header>
      <div class="floating home-icon">
        <span class="tooltiptext floating">HOME</span>
      </div>
      <div class="floating other-icon">
        <span class="tooltiptext floating">MEMBERS</span>
      </div>
      <div class="floating third-icon">
        <span class="tooltiptext floating">EVENTS</span>
      </div>
    </header>
    <canvas id="c"></canvas>
    <div id="info"></div>
    <div id="info-bottom"></div>
    <div id="loading"><div class="progress"><div class="progressbar"></div></div></div>
    <script src="http://files.ffettes.workers.dev/main.js"></script>
	</body>
</html>
`
