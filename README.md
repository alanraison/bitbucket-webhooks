# bitbucket-webhooks
Type definitions for Bitbucket webhook events

![CI Status](https://github.com/alanraison/bitbucket-webhooks/workflows/CI/badge.svg)

## Usage

Since Bitbucket Server and Bitbucket Cloud have different webook formats, you need to import the type definitions from the appropriate place; either:

```typescript
import { server } from 'bitbucket-webhooks';
let pr: server.PullRequest;
// or
import { PullRequest } from 'bitbucket-webhooks/server';
let pr: PullRequest;
```

*Note that there are no definitions for the Bitbucket Cloud webhooks yet*

There are also builder functions for the various types:

```typescript
import { PullRequest } from 'bitbucket-webhooks/server';
import { pullRequest } from 'bitbucket-webhooks/builders/server';

const pr: PullRequest = pullRequest({
  description: 'A super-cool pull request',
});
```

## Legal

Bitbucket is a trademark of [Atlassian](https://atlassian.com), with which this library is not associated.