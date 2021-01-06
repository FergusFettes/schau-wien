# Schau Wien website

This is the website for Schau, an art collective in Vienna, grounded in June 2020.

## History

This site was born out of a process of experimentation with different hosting methods, development workflows and a whole mess of javascript experiments. I initially planned to host the site myself with a free gcloud instance and the [lovely letsencrypt image](https://github.com/linuxserver/docker-letsencrypt/blob/master/README.md) which makes setting up an nginx server super easy. However I soon discovered that fiddling with nginx configs whenever you want to change a subdomain is a pain and also total overkill for a static website, so this is my second attempt, which will be using the free account at cloudflare. If I can run out my free 100,000 hits a day I'll be a happy man.

Anyway the [initial repo](https://github.com/FergusFettes/docker-web-server) is where I will continue to do more radical threejs (and hopefully someday shader and maybe rust/wasm) experiments, and this one will be mostly for production stuff and scripts for running my cloudflare workers.

## Technical guide
WORK IN PROGRESS: this is aspirational

Three tier website structure:
1) The css style sheets are available [here](https://jsfiddle.net/fergusfettes/a3p1450c/) so anyone who makes an account there can collaborate. The CSS sheets define an overall style for the website which is consistent across all the views.
2) The 3d (threejs) main structure of the website. That lives here in this repo, and anyone who wants to collaborate should get a github account and make pull requests.
3) The contents of the individual cubes. These are actually just blog entries from [here](blog.schau-wien.at) which anyone (without any technical knowledge) can edit. The blog is scraped regularly for content.

To that end, I will set up my gcloud micro instance with some cron jobs to do the following:
* scrape the css sheets
* scrape the blog
* assemble the website
* update the cloudflare workers

These cronjobs will live in [cronjobs](./cronjobs), check them out.

## Cloudflare workers

Cloudflare workers seem like a pretty cool way to run a basic website. [Check them out.](./workers). Eventually I will figure out how headers work properly and there will be three workers: one for serving text files, one for serving images, and one for serving the `index.html`. If I ever get round to making a mobile optimized version I'll set up another worker to handle that.

I set up all the workers to perform caching, which should make the website pretty heckin responsive afaia. Lets see.
