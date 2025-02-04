# Scalar OpenAPI Types

[![CI](https://github.com/khulnasoft/scalar/actions/workflows/ci.yml/badge.svg)](https://github.com/khulnasoft/scalar/actions/workflows/ci.yml)
[![Contributors](https://img.shields.io/github/contributors/scalar/scalar)](https://github.com/khulnasoft/scalar/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/scalar/scalar)](https://github.com/khulnasoft/scalar/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/scalar)

Modern OpenAPI parser written in TypeScript, with support for Swagger 2.0, OpenAPI 3.0 and OpenAPI 3.1

## Installation

```bash
npm add @scalar/openapi-types
```

## Usage

```ts
import type { OpenAPI } from '@scalar/openapi-types'

const file: OpenAPI.Document = {
  openapi: '3.1.0',
  info: {
    title: 'Hello World',
    version: '1.0.0',
  },
  paths: {},
}
```

## Community

We are API nerds. You too? Let’s chat on Discord: <https://discord.gg/scalar>

## License

The source code in this repository is licensed under [MIT](https://github.com/khulnasoft/scalar/blob/main/LICENSE).
