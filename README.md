# C++ at Adobe Website

This is a site built with the [Adobe I/O Theme](https://github.com/adobe/aio-theme).

## Where to ask for help

The slack channel #adobeio-onsite-onboarding is our main point of contact for help. Feel free to join the channel and ask any questions.

## How to develop

For local development, simply use :
```
$ yarn install
$ yarn dev
```

For the documentation developer, please read these sections on how to:
- [Arrange the structure content of your docs](https://github.com/adobe/aio-theme#content-structure)
- [Linking to pages](https://github.com/adobe/aio-theme#links)
- [Using assets](https://github.com/adobe/aio-theme#assets)
- [Setting Global Navigation](https://github.com/adobe/aio-theme#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/aio-theme#side-navigation)
- [Using content blocks](https://github.com/adobe/aio-theme#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/aio-theme#writing-enhanced-markdown)

For more in-depth [instructions](https://github.com/adobe/aio-theme#getting-started).

## How to deploy

For any team that wishes to deploy to the developer.adobe.com and developer-stage.adobe.com websites, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `developer.adobe.com/{product}/`. This will allow doc developers to setup their subpaths to look something like:
```
developer.adobe.com/{product}/docs
developer.adobe.com/{product}/community
developer.adobe.com/{product}/community/code_of_conduct
developer.adobe.com/{product}/community/contribute
```

### Launching a deploy

You can deploy using the GitHub actions deploy workflow see [deploy instructions](https://github.com/adobe/aio-theme#deploy-to-azure-storage-static-websites).
