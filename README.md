# 📲 whatsapp-link
Link builder for WhatsApp click-to-chat: wa.me, api.whatsapp.com, `whatsapp://` app links and Android intents with fallback.

This project is not affiliated with, endorsed by, or sponsored by WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a trademark of WhatsApp LLC, used here only to describe compatibility.

<div align="center">

[![GitHub Repo stars](https://img.shields.io/github/stars/MattEzekiel/wa-converter)](https://github.com/MattEzekiel/wa-converter/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/MattEzekiel/wa-converter)](https://github.com/MattEzekiel/wa-converter/watchers)
[![GitHub forks](https://img.shields.io/github/forks/MattEzekiel/wa-converter)](https://github.com/MattEzekiel/wa-converter/network/members)

[![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FMattEzekiel%2Fwa-converter%2Fmaster%2Fpackage.json&query=version&label=version)](https://github.com/MattEzekiel/wa-converter)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Node](https://img.shields.io/badge/node-%3D%3E20-20)](https://nodejs.org)
[![Package - Yarn](https://img.shields.io/badge/yarn-%3E%3D1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com)
[![Package - TypeScript](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FMattEzekiel%2Fwa-converter%2Fmaster%2Fpackage.json&query=devDependencies.typescript&label=TypeScript&logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript)

[![NPM Package Downloads](https://img.shields.io/npm/dy/whatsapp-link)](https://www.npmjs.com/package/whatsapp-link)

[![GitHub Issues](https://img.shields.io/github/issues/MattEzekiel/wa-converter)](https://github.com/MattEzekiel/wa-converter/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/MattEzekiel/wa-converter)](https://github.com/MattEzekiel/wa-converter/pulls)

[![Github Sponsors](https://img.shields.io/badge/Sponsor-30363D?&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/mattezekiel)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?&logo=buy-me-a-coffee&logoColor=black)](https://cafecito.app/mattezekiel)

</div>

## Installation

You can install the package via npm:
### npm
```bash
npm install whatsapp-link
```

### yarn
```bash
yarn add whatsapp-link
```

### pnpm
```bash
pnpm add whatsapp-link
```

## Usage
### Import
```ts
import formatWhatsAppUrl from 'whatsapp-link';
import { formatWhatsAppUrl, type LinkType } from 'whatsapp-link';
```

### Add to your code
```ts
formatWhatsAppUrl('+123456489', 'Hello friend');
```

### Link types
`formatWhatsAppUrl(phone, message?, type = 'wa.me')`. Non-digits are stripped from `phone`; an error is thrown if no digits remain. The `text` parameter is omitted when there is no message.

| `type` | Output for `formatWhatsAppUrl('+123456489', 'Hi', type)` | Notes |
| --- | --- | --- |
| `'wa.me'` | `https://wa.me/123456489?text=Hi` | Default |
| `'api'` | `https://api.whatsapp.com/send?phone=123456489&text=Hi` | |
| `'app'` | `whatsapp://send?phone=123456489&text=Hi` | Opens the installed app directly; no fallback if WhatsApp is missing |
| `'android'` | `intent://send?phone=123456489&text=Hi#Intent;scheme=whatsapp;package=com.whatsapp;S.browser_fallback_url=https%3A%2F%2Fwa.me%2F123456489%3Ftext%3DHi;end` | Chrome on Android; falls back to the wa.me link if WhatsApp is not installed |

## Migrating from whatsapp-conveter
The package was renamed from `whatsapp-conveter` to `whatsapp-link`. The default export is the same.

```bash
npm uninstall whatsapp-conveter && npm install whatsapp-link
```

Then update the import path from `'whatsapp-conveter'` to `'whatsapp-link'`.

## Contributing and Issue Tracking
If you're interested in contributing to this project or want to report an issue, please check out our [CONTRIBUTING.md](https://github.com/MattEzekiel/wa-converter/blob/master/CONTRIBUTING.md) guide for detailed information on how to get involved.

## Code of conduct
Respect our [CODE OF CONDUCT](https://github.com/MattEzekiel/wa-converter/blob/master/CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MattEzekiel/wa-converter/blob/master/LICENCE.md) file for details.
