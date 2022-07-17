[![Hakuba screenshots](./screenshots.png 'Hakuba screenshots')](https://hakuba.yeungkc.com/)

# Hakuba

> Hakuba (白馬村 , Hakuba-mura) is a village located in Nagano Prefecture, Japan.
> If you like nature or skiing, this would be a great place to visit (btw I haven't been there yet...)

A **fast** blog starter driven by Github discussions for all data.

> _[Test its speed now.!!](https://pagespeed.web.dev/report?url=https%3A%2F%2Fhakuba.yeungkc.com%2F)_

## How to work

Hakuba uses [Github graphql API](https://docs.github.com/en/graphql) with webhook to update the discussion to automatically deploy the blog.

## Quick start

### Clone this repository

```bash
git clone git@github.com:YeungKC/Hakuba.git
```

or [Fork it](https://github.com/YeungKC/Hakuba/fork)

Recommended for deployment using [vercel](https://vercel.com/), [netlify](https://app.netlify.com/) or [Cloudflare Pages](https://pages.cloudflare.com/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYeungKC%2FHakuba%2F&env=GITHUB_TOKEN,REPOSITORY&envDescription=Configure%20token%20and%20repository%20name&redirect-url=https%3A%2F%2Fgithub.com%2FYeungKC%2FHakuba&production-deploy-hook=Discussion%20hook)

### Setup config

There are various ways to configure it, you can choose to configure it all using environment variables, or partly through discussion.

| name                                               | desc                                                                                                   | required | env | config |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | --- | ------ |
| [GITHUB_TOKEN](https://github.com/settings/tokens) | Require the `repo` scope for private repositories and the `public_repo` scope for public repositories. | ✅       | ✅  | ❌     |
| REPOSITORY                                         | Repository name                                                                                        | ✅       | ✅  | ❌     |
| PAGE_SIZE                                          | Default 10                                                                                             | ❌       | ✅  | ✅     |
| BLOG_NAME                                          | Automatically fetches from GitHub profile by default                                                   | ❌       | ✅  | ✅     |
| BIO                                                | Automatically fetches from GitHub profile by default                                                   | ❌       | ✅  | ✅     |
| EMAIL                                              | Just a E-mail, for about section                                                                       | ❌       | ✅  | ✅     |
| TWITTER                                            | Not included @ ! (example: SvelteJS) for about section                                                 | ❌       | ✅  | ✅     |
| DOMAIN                                             | If the domain is missing, the feed will not be enabled                                                 | ❌       | ✅  | ✅     |
| DESCRIPTION                                        | For SEO meta data                                                                                      | ❌       | ✅  | ✅     |
| KEYWORDS                                           | For SEO meta data                                                                                      | ❌       | ✅  | ✅     |
| COMMENT                                            | Whether to enable comments, default true                                                               | ❌       | ✅  | ✅     |
| LANGUAGE                                           | For html tag, Default en                                                                               | ❌       | ✅  | ✅     |
| CONFIG_CATEGORY                                    | Default Config                                                                                         | ❌       | ✅  | ❌     |
| POST_CATEGORY                                      | Default Post                                                                                           | ❌       | ✅  | ❌     |
| PAGE_CATEGORY                                      | Default Page                                                                                           | ❌       | ✅  | ❌     |

### Discussion config

Create the categories and set it to **Announcement**.

> Page and Post actually support mdx and `script` tags, so don't make the writing permissions public.

Only title is index will be recognized as config, here is a [example](https://github.com/YeungKC/Hakuba/discussions/3).

### Deploy

```bash
# Choose one of them

yarn build
npm run build
pnpm build
```

deploy the build directory to your server.

## More info

Page and post support front matter settings or override some information.

### Page front matter

Here is a [example](https://github.com/YeungKC/Hakuba/discussions/58)

| name     | desc                       |
| -------- | -------------------------- |
| lang     | For html tag               |
| comment  | Whether to enable comments |
| priority | Priority of navigation     |
| path     | Path of the page           |
| excerpt  | For SEO meta data          |

### Post front matter

Here is a [example](https://github.com/YeungKC/Hakuba/discussions/58)

| name      | desc                                                |
| --------- | --------------------------------------------------- |
| lang      | For html tag                                        |
| comment   | Whether to enable comments                          |
| path      | Path of the page                                    |
| excerpt   | For SEO meta data                                   |
| title     | Just a title, default use title of discussion       |
| published | Published date, default use published of discussion |
| updated   | Updated date, default use updated of discussion     |

## Deploy Hooks

If you deploy using [vercel](https://vercel.com/), [netlify](https://app.netlify.com/) or [Cloudflare Pages](https://pages.cloudflare.com/), you can automate the deployment via webhook, which will automatically deploy whenever new discussions are modified.

- Create a new Deploy Hooks.
- Go to the repository settings page to set up the webhook and just select Discussion event.

## Auto merge

This project using [action-dependabot-auto-merge](https://github.com/ahmadnassri/action-dependabot-auto-merge#token-scope), If there is a CI failure, configure Dependabot secrets.
