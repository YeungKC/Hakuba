[![Hakuba screenshots](./screenshots.png 'Hakuba screenshots')](https://hakuba.yeungkc.com/)

# Hakuba

> Hakuba (白馬村 , Hakuba-mura) is a village located in Nagano Prefecture, Japan.
> If you enjoy nature or skiing, this would be a great place to go (btw I haven't been there yet...)

A **fast** blog starter that reads data off GitHub Discussions.

> _[See how fast it is in action!!](https://pagespeed.web.dev/report?url=https%3A%2F%2Fhakuba.yeungkc.com%2F)_

Please star and [fork](https://github.com/YeungKC/Hakuba/fork) if you like it!

## How Does It Work

Hakuba fetches the contents on GitHub Discussions with [GitHub GraphQL API](https://docs.github.com/en/graphql) and webhooks.
Then renders the actual blog pages from them.

## Quick Start

Recommended hosting services:

- [Vercel](https://vercel.com/)
- [Netlify](https://app.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

Deploy with Vercel:  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYeungKC%2FHakuba&env=GITHUB_TOKEN,REPOSITORY&envDescription=Configure%20token%20and%20repository%20name%2C%20see%20https%3A%2F%2Fgithub.com%2FYeungKC%2FHakuba&project-name=blog&repo-name=blog&demo-title=Hakuba&demo-description=A%20fast%20blog%20starter%20driven%20by%20Github%20discussions%20for%20all%20data.&demo-url=https%3A%2F%2Fhakuba.yeungkc.com%2F&demo-image=https%3A%2F%2Fgithub.com%2FYeungKC%2FHakuba%2Fraw%2Fmaster%2Fscreenshots.png)

... or continue scrolling for guide about [manual deployment](#manual-deployment)

### Configuration

There are various ways to configure it, you can choose to configure it all using environment variables, or partly through discussion.

| Name                                               | Description                                                                                                                                       | Required | env | config |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --- | ------ |
| [GITHUB_TOKEN](https://github.com/settings/tokens) | Require a personal access token with permissions in the `public_repo` scope for public repositories, or the `repo` scope for private ones.        | ✅       | ✅  | ❌     |
| REPOSITORY                                         | The target repository                                                                                                                             | ✅       | ✅  | ❌     |
| PAGE_SIZE                                          | Number Category name of posts for configuration purposes in GitHub Discussion.kof posts per page, 10 at default.                                  | ❌       | ✅  | ✅     |
| BLOG_NAME                                          | Name of the blog, Hakuba fetches it from GitHub profile if left blank.                                                                            | ❌       | ✅  | ✅     |
| BIO                                                | Biography of the block, Hakuba fetches it from GitHub profile if left blank.                                                                      | ❌       | ✅  | ✅     |
| EMAIL                                              | Email for contact in the about section                                                                                                            | ❌       | ✅  | ✅     |
| TWITTER                                            | Twitter handle without the leading `@` (e.g. SvelteJS)                                                                                            | ❌       | ✅  | ✅     |
| DOMAIN                                             | Domain of the blog. RSS feed will be disabled if left blank.                                                                                      | ❌       | ✅  | ✅     |
| DESCRIPTION                                        | Description of the blog in SEO metadata.                                                                                                          | ❌       | ✅  | ✅     |
| KEYWORDS                                           | Keywords for SEO metadata.                                                                                                                        | ❌       | ✅  | ✅     |
| COMMENT                                            | Whether to enable comments, `true` at default.                                                                                                    | ❌       | ✅  | ✅     |
| LANGUAGE                                           | Language of the block in form of [HTML language code](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang). `en` at default. | ❌       | ✅  | ✅     |
| TIMEZONE                                           | Timezone of `Date.prototype.toLocaleDateString(locals, options)`, `GMT` at default.                                                               | ❌       | ✅  | ✅     |
| CONFIG_CATEGORY                                    | Category name of posts for configuration purposes on GitHub Discussion. `Config` at default.                                                      | ❌       | ✅  | ❌     |
| POST_CATEGORY                                      | Category name of actual posts on GitHub Discussion. `Post` at default.                                                                            | ❌       | ✅  | ❌     |
| PAGE_CATEGORY                                      | Category name of posts for dedicated pages on GitHub Discussion. `Page` at default.                                                               | ❌       | ✅  | ❌     |

### Setup GitHub Discussions

Create discussions categories for configurations, posts, and pages. Then Set their format to **Announcement**.

> Hakuba supports mdx and HTML `script` tags for pages and posts, so don't make them public-editable.

Only the post named `index` will be used as the main configuration. Here is an [example](https://github.com/YeungKC/Hakuba/discussions/3).

### Setup Webhooks

If you deployed Hakuba using [vercel](https://vercel.com/), [netlify](https://app.netlify.com/) or [Cloudflare Pages](https://pages.cloudflare.com/), update of the contents could be automated with webhooks when discussions are modified.

- Create a new Deploy Hook.
- Go to the repository settings page to set up the webhook. Select Discussion events.

### Manual Deployment

Clone the repository with `git`:

```bash
git clone git@github.com:YeungKC/Hakuba.git
```

Then, generate the pages:

```bash
# Run any one of them

yarn build
npm run build
pnpm build
```

Finally, upload the `build` directory to your web server.

## Additional Settings for Pages and Posts

Pages and posts support Markdown front matter for metadata and configuration overrides.

### Front matter for pages

Here is an [example](https://github.com/YeungKC/Hakuba/discussions/58)

| name     | desc                                                  |
| -------- | ----------------------------------------------------- |
| lang     | Language of the post in the form of html language tag |
| comment  | Whether to enable comments                            |
| priority | Priority for indexing                                 |
| path     | Path to the page, use all lowercase title by default  |
| excerpt  | Excerpt of the page for SEO metadata                  |

### Post front matter

Here is an [example](https://github.com/YeungKC/Hakuba/discussions/58)

| name      | desc                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| lang      | Language of the post in the form of html language tag                                        |
| comment   | Whether to enable comments                                                                   |
| path      | Path to the post                                                                             |
| excerpt   | Excerpt of the page for SEO metadata                                                         |
| title     | Title of the post. Hakuba uses the title of the discussion post at default.                  |
| published | Date published. Hakuba uses the date of the discussion post at default.                      |
| updated   | Date updated. Hakuba uses the latest date of modification of the discussion post at default. |

## Dependabot Auto Merge

This project uses [action-dependabot-auto-merge](https://github.com/ahmadnassri/action-dependabot-auto-merge#token-scope) for updating dependencies automatically. If there is a CI failure, try to configure Dependabot secrets.

## Roadmap

- [ ] Design a logo.
- [ ] Page transitions.
- [ ] Pre-download resources.
- [ ] Lazy load images.
- [ ] Dark mode.

## Credits

- [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus), I have used this theme for a long time, it has inspired the current theme of Hakuba.

## License

GPL-3.0
