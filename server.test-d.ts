import { expectAssignable } from 'tsd';
import { CommitCommentAddedEvent, CommitCommentDeleteEvent, CommitCommentEditEvent, MirrorSynchronizedEvent, PullRequestApproved, PullRequestCommentAdded, PullRequestCommentDeleted, PullRequestCommentEdited, PullRequestDeclined, PullRequestDeleted, PullRequestMerged, PullRequestModifiedEvent, PullRequestNeedsWork, PullRequestOpenedEvent, PullRequestReviewersUpdatedEvent, PullRequestUnapproved, PullRequestUpdatedEvent, RepositoryForkedEvent, RepositoryModifiedEvent, RepositoryPushEvent } from './server';

expectAssignable<RepositoryPushEvent>({
  "eventKey": "repo:refs_changed",
  "date": "2017-09-19T09:45:32+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "repository": {
    "slug": "repository",
    "id": 84,
    "name": "repository",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "PROJ",
      "id": 84,
      "name": "project",
      "public": false,
      "type": "NORMAL"
    },
    "public": false
  },
  "changes": [
    {
      "ref": {
        "id": "refs/heads/master",
        "displayId": "master",
        "type": "BRANCH"
      },
      "refId": "refs/heads/master",
      "fromHash": "ecddabb624f6f5ba43816f5926e580a5f680a932",
      "toHash": "178864a7d521b6f5e720b386b2c2b0ef8563e0dc",
      "type": "UPDATE"
    }
  ]
});
expectAssignable<RepositoryModifiedEvent>({
  "eventKey": "repo:modified",
  "date": "2017-09-19T09:51:20+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "old": {
    "slug": "repository",
    "id": 84,
    "name": "repository",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "PROJ",
      "id": 84,
      "name": "project",
      "public": false,
      "type": "NORMAL"
    },
    "public": false
  },
  "new": {
    "slug": "repository2",
    "id": 84,
    "name": "repository2",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "PROJ",
      "id": 84,
      "name": "project",
      "public": false,
      "type": "NORMAL"
    },
    "public": false
  }
});
expectAssignable<RepositoryForkedEvent>({
  "eventKey": "repo:forked",
  "date": "2017-09-19T09:48:26+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "repository": {
    "slug": "repository2",
    "id": 86,
    "name": "repository2",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "origin": {
      "slug": "repository",
      "id": 84,
      "name": "repository",
      "scmId": "git",
      "state": "AVAILABLE",
      "statusMessage": "Available",
      "forkable": true,
      "project": {
        "key": "PROJ",
        "id": 84,
        "name": "project",
        "public": false,
        "type": "NORMAL"
      },
      "public": false
    },
    "project": {
      "key": "~ADMIN",
      "id": 22,
      "name": "Administrator",
      "type": "PERSONAL",
      "owner": {
        "name": "admin",
        "emailAddress": "admin@example.com",
        "id": 1,
        "displayName": "Administrator",
        "active": true,
        "slug": "admin",
        "type": "NORMAL"
      }
    },
    "public": false
  }
});
expectAssignable<CommitCommentAddedEvent>({
  "eventKey": "repo:comment:added",
  "date": "2017-09-19T09:53:06+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "comment": {
    "properties": {
      "repositoryId": 84
    },
    "id": 42,
    "version": 0,
    "text": "This is a great line of code!",
    "author": {
      "name": "admin",
      "emailAddress": "admin@example.com",
      "id": 1,
      "displayName": "Administrator",
      "active": true,
      "slug": "admin",
      "type": "NORMAL"
    },
    "createdDate": 1505778786337,
    "updatedDate": 1505778786337,
    "comments": [

    ],
    "tasks": [

    ],
    "permittedOperations": {
      "editable": true,
      "deletable": true
    }
  },
  "repository": {
    "slug": "repository",
    "id": 84,
    "name": "repository",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "PROJ",
      "id": 84,
      "name": "project",
      "public": false,
      "type": "NORMAL"
    },
    "public": false
  },
  "commit": "178864a7d521b6f5e720b386b2c2b0ef8563e0dc"
});
expectAssignable<CommitCommentEditEvent>({
  "eventKey": "repo:comment:edited",
  "date": "2017-09-19T09:55:03+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "comment": {
    "properties": {
      "repositoryId": 84
    },
    "id": 42,
    "version": 1,
    "text": "This is a okay line of code!",
    "author": {
      "name": "admin",
      "emailAddress": "admin@example.com",
      "id": 1,
      "displayName": "Administrator",
      "active": true,
      "slug": "admin",
      "type": "NORMAL"
    },
    "createdDate": 1505778786337,
    "updatedDate": 1505778903525,
    "comments": [

    ],
    "tasks": [

    ],
    "permittedOperations": {
      "editable": true,
      "deletable": true
    }
  },
  "repository": {
    "slug": "repository",
    "id": 84,
    "name": "repository",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "PROJ",
      "id": 84,
      "name": "project",
      "public": false,
      "type": "NORMAL"
    },
    "public": false
  },
  "commit": "178864a7d521b6f5e720b386b2c2b0ef8563e0dc",
  "previousComment": "This is a great line of code!"
});
expectAssignable<CommitCommentDeleteEvent>({
  "eventKey": "repo:comment:deleted",
  "date": "2017-09-19T09:56:29+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "comment": {
    "id": 42,
    "version": 1,
    "text": "This is a okay line of code!",
    "author": {
      "name": "admin",
      "emailAddress": "admin@example.com",
      "id": 1,
      "displayName": "Administrator",
      "active": true,
      "slug": "admin",
      "type": "NORMAL"
    },
    "createdDate": 1505778786337,
    "updatedDate": 1505778903525,
    "comments": [

    ],
    "tasks": [

    ]
  },
  "repository": {
    "slug": "repository",
    "id": 84,
    "name": "repository",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "PROJ",
      "id": 84,
      "name": "project",
      "public": false,
      "type": "NORMAL"
    },
    "public": false
  },
  "commit": "178864a7d521b6f5e720b386b2c2b0ef8563e0dc"
});
expectAssignable<MirrorSynchronizedEvent>({
  "eventKey": "mirror:repo_synchronized",
  "date": "2019-07-11T16:18:20+1000",
  "mirrorServer": {
    "id": "B88H-IR7J-5PV0-VCNS",
    "name": "Mirror Name"
  },
  "syncType": "INCREMENTAL",
  "refLimitExceeded": false,
  "repository": {
    "slug": "testrepo",
    "id": 1,
    "name": "testrepo",
    "scmId": "git",
    "state": "AVAILABLE",
    "statusMessage": "Available",
    "forkable": true,
    "project": {
      "key": "TP",
      "id": 1,
      "name": "testp",
      "public": false,
      "type": "NORMAL"
    },
    "public": false,
    "links": {
      "clone": [
        {
          "href": "ssh://git@example.com:7997/project/repository.git",
          "name": "ssh"
        },
        {
          "href": "https://example.com/scm/project/repository.git",
          "name": "http"
        }
      ],
      "self": [
        {
          "href": "https://example.com/projects/project/repos/repo/browse"
        }
      ]
    }
  },
  "changes": [
    {
      "ref": {
        "id": "refs/heads/master",
        "displayId": "master",
        "type": "BRANCH"
      },
      "refId": "refs/heads/master",
      "fromHash": "b5616b9",
      "toHash": "d055eca",
      "type": "UPDATE"
    }
  ]
});
expectAssignable<PullRequestOpenedEvent>({
  "eventKey": "pr:opened",
  "date": "2017-09-19T09:58:11+1000",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "pullRequest": {
    "id": 1,
    "version": 0,
    "title": "a new file added",
    "state": "OPEN",
    "open": true,
    "closed": false,
    "createdDate": 1505779091796,
    "updatedDate": 1505779091796,
    "fromRef": {
      "id": "refs/heads/a-branch",
      "displayId": "a-branch",
      "latestCommit": "ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
      "repository": {
        "slug": "repository",
        "id": 84,
        "name": "repository",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "PROJ",
          "id": 84,
          "name": "project",
          "public": false,
          "type": "NORMAL"
        },
        "public": false
      }
    },
    "toRef": {
      "id": "refs/heads/master",
      "displayId": "master",
      "latestCommit": "178864a7d521b6f5e720b386b2c2b0ef8563e0dc",
      "repository": {
        "slug": "repository",
        "id": 84,
        "name": "repository",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "PROJ",
          "id": 84,
          "name": "project",
          "public": false,
          "type": "NORMAL"
        },
        "public": false
      }
    },
    "locked": false,
    "author": {
      "user": {
        "name": "admin",
        "emailAddress": "admin@example.com",
        "id": 1,
        "displayName": "Administrator",
        "active": true,
        "slug": "admin",
        "type": "NORMAL"
      },
      "role": "AUTHOR",
      "approved": false,
      "status": "UNAPPROVED"
    },
    "reviewers": [

    ],
    "participants": [

    ],
    "links": {
      "self": [
        null
      ]
    }
  }
});
expectAssignable<PullRequestUpdatedEvent>({
  "eventKey": "pr:from_ref_updated",
  "date": "2020-02-20T14:49:41+1100",
  "actor": {
    "name": "admin",
    "emailAddress": "admin@example.com",
    "id": 1,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL",
    "links": {
      "self": [
        {
          "href": "http://localhost:7990/bitbucket/users/admin"
        }
      ]
    }
  },
  "pullRequest": {
    "id": 2,
    "version": 16,
    "title": "Webhook",
    "state": "OPEN",
    "open": true,
    "closed": false,
    "createdDate": 1582065825700,
    "updatedDate": 1582170581372,
    "fromRef": {
      "id": "refs/heads/pr-webhook",
      "displayId": "pr-webhook",
      "latestCommit": "aab847db240ccae221f8036605b00f777eba95d2",
      "repository": {
        "slug": "dvcs",
        "id": 33,
        "name": "dvcs",
        "hierarchyId": "09992c6ad9e001f01120",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "GIT",
          "id": 62,
          "name": "Bitbucket",
          "public": false,
          "type": "NORMAL",
          "links": {
            "self": [
              {
                "href": "http://localhost:7990/bitbucket/projects/GIT"
              }
            ]
          }
        },
        "public": false,
        "links": {
          "clone": [
            {
              "href": "ssh://git@localhost:7999/git/dvcs.git",
              "name": "ssh"
            },
            {
              "href": "http://localhost:7990/bitbucket/scm/git/dvcs.git",
              "name": "http"
            }
          ],
          "self": [
            {
              "href": "http://localhost:7990/bitbucket/projects/GIT/repos/dvcs/browse"
            }
          ]
        }
      }
    },
    "toRef": {
      "id": "refs/heads/master",
      "displayId": "master",
      "latestCommit": "86448735f9dee9e1fb3d3e5cd9fbc8eb9d8400f4",
      "repository": {
        "slug": "dvcs",
        "id": 33,
        "name": "dvcs",
        "hierarchyId": "09992c6ad9e001f01120",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "GIT",
          "id": 62,
          "name": "Bitbucket",
          "public": false,
          "type": "NORMAL",
          "links": {
            "self": [
              {
                "href": "http://localhost:7990/bitbucket/projects/GIT"
              }
            ]
          }
        },
        "public": false,
        "links": {
          "clone": [
            {
              "href": "ssh://git@localhost:7999/git/dvcs.git",
              "name": "ssh"
            },
            {
              "href": "http://localhost:7990/bitbucket/scm/git/dvcs.git",
              "name": "http"
            }
          ],
          "self": [
            {
              "href": "http://localhost:7990/bitbucket/projects/GIT/repos/dvcs/browse"
            }
          ]
        }
      }
    },
    "locked": false,
    "author": {
      "user": {
        "name": "admin",
        "emailAddress": "admin@example.com",
        "id": 1,
        "displayName": "Administrator",
        "active": true,
        "slug": "admin",
        "type": "NORMAL",
        "links": {
          "self": [
            {
              "href": "http://localhost:7990/bitbucket/users/admin"
            }
          ]
        }
      },
      "role": "AUTHOR",
      "approved": false,
      "status": "UNAPPROVED"
    },
    "reviewers": [],
    "participants": [],
    "links": {
      "self": [
        {
          "href": "http://localhost:7990/bitbucket/projects/GIT/repos/dvcs/pull-requests/2"
        }
      ]
    }
  },
  "previousFromHash": "99f3ea32043ba3ecaa28de6046b420de70257d80"
});
expectAssignable<PullRequestModifiedEvent>({
  "eventKey": "pr:modified",
  "date": "2018-04-24T10:15:30+1000",
  "actor": {
    "name": "Administrator",
    "emailAddress": "example@atlassian.com",
    "id": 110653,
    "displayName": "Administrator",
    "active": true,
    "slug": "pathompson",
    "type": "NORMAL"
  },
  "pullRequest": {
    "id": 1,
    "version": 1,
    "title": "A new title",
    "description": "A new description",
    "state": "OPEN",
    "open": true,
    "closed": false,
    "createdDate": 1524528879329,
    "updatedDate": 1524528930110,
    "fromRef": {
      "id": "refs/heads/new-branch",
      "displayId": "new-branch",
      "latestCommit": "5a705e60111a4213da46839d9cbf4fc43639b771",
      "repository": {
        "slug": "example",
        "id": 12087,
        "name": "example",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "~ADMIN",
          "id": 8504,
          "name": "Administrator",
          "type": "PERSONAL",
          "owner": {
            "name": "Administrator",
            "emailAddress": "example@atlassian.com",
            "id": 110653,
            "displayName": "Administrator",
            "active": true,
            "slug": "admin",
            "type": "NORMAL"
          }
        },
        "public": false
      }
    },
    "toRef": {
      "id": "refs/heads/master",
      "displayId": "master",
      "latestCommit": "860c4eb4ed0f969b47144234ba13c31c498cca69",
      "repository": {
        "slug": "example",
        "id": 12087,
        "name": "example",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "~ADMIN",
          "id": 8504,
          "name": "Administrator",
          "type": "PERSONAL",
          "owner": {
            "name": "Administrator",
            "emailAddress": "example@atlassian.com",
            "id": 110653,
            "displayName": "Administrator",
            "active": true,
            "slug": "admin",
            "type": "NORMAL"
          }
        },
        "public": false
      }
    },
    "locked": false,
    "author": {
      "user": {
        "name": "Administrator",
        "emailAddress": "example@atlassian.com",
        "id": 110653,
        "displayName": "Administrator",
        "active": true,
        "slug": "admin",
        "type": "NORMAL"
      },
      "role": "AUTHOR",
      "approved": false,
      "status": "UNAPPROVED"
    },
    "reviewers": [
      {
        "user": {
          "name": "User",
          "emailAddress": "user@atlassian.com",
          "id": 36303,
          "displayName": "User",
          "active": true,
          "slug": "user",
          "type": "NORMAL"
        },
        "role": "REVIEWER",
        "approved": false,
        "status": "UNAPPROVED"
      }
    ],
    "participants": [
      
    ]
  },
  "previousTitle": "A cool PR",
  "previousDescription": "A neat description",
  "previousTarget": {
    "id": "refs\/heads\/master",
    "displayId": "master",
    "type": "BRANCH",
    "latestCommit": "860c4eb4ed0f969b47144234ba13c31c498cca69",
    "latestChangeset": "860c4eb4ed0f969b47144234ba13c31c498cca69"
  }
});
expectAssignable<PullRequestReviewersUpdatedEvent>({
  "eventKey": "pr:reviewer:updated",
  "date": "2018-04-24T10:20:07+1000",
  "actor": {
    "name": "Administrator",
    "emailAddress": "admin@atlassian.com",
    "id": 110653,
    "displayName": "Administrator",
    "active": true,
    "slug": "admin",
    "type": "NORMAL"
  },
  "pullRequest": {
    "id": 1,
    "version": 2,
    "title": "A title",
    "description": "A description",
    "state": "OPEN",
    "open": true,
    "closed": false,
    "createdDate": 1524528879329,
    "updatedDate": 1524529207598,
    "fromRef": {
      "id": "refs/heads/new-branch",
      "displayId": "new-branch",
      "latestCommit": "5a705e60111a4213da46839d9cbf4fc43639b771",
      "repository": {
        "slug": "example",
        "id": 12087,
        "name": "example",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "~ADMIN",
          "id": 8504,
          "name": "Administrator",
          "type": "PERSONAL",
          "owner": {
            "name": "admin",
            "emailAddress": "example@atlassian.com",
            "id": 110653,
            "displayName": "Administrator",
            "active": true,
            "slug": "admin",
            "type": "NORMAL"
          }
        },
        "public": false
      }
    },
    "toRef": {
      "id": "refs/heads/master",
      "displayId": "master",
      "latestCommit": "860c4eb4ed0f969b47144234ba13c31c498cca69",
      "repository": {
        "slug": "example",
        "id": 12087,
        "name": "example",
        "scmId": "git",
        "state": "AVAILABLE",
        "statusMessage": "Available",
        "forkable": true,
        "project": {
          "key": "~ADMIN",
          "id": 8504,
          "name": "Administrator",
          "type": "PERSONAL",
          "owner": {
            "name": "Administrator",
            "emailAddress": "admin@atlassian.com",
            "id": 110653,
            "displayName": "Administrator",
            "active": true,
            "slug": "admin",
            "type": "NORMAL"
          }
        },
        "public": false
      }
    },
    "locked": false,
    "author": {
      "user": {
        "name": "Administrator",
        "emailAddress": "admin@atlassian.com",
        "id": 110653,
        "displayName": "Administrator",
        "active": true,
        "slug": "admin",
        "type": "NORMAL"
      },
      "role": "AUTHOR",
      "approved": false,
      "status": "UNAPPROVED"
    },
    "reviewers": [
      {
        "user": {
          "name": "pathompson_admin",
          "emailAddress": "pathompson@atlassian.com",
          "id": 129659,
          "displayName": "Paul Thompson Admin",
          "active": true,
          "slug": "pathompson_admin",
          "type": "NORMAL"
        },
        "role": "REVIEWER",
        "approved": false,
        "status": "UNAPPROVED"
      }
    ],
    "participants": [
      
    ]
  },
  "addedReviewers": [
    {
      "name": "new user",
      "emailAddress": "user2@atlassian.com",
      "id": 129659,
      "displayName": "New User",
      "active": true,
      "slug": "new_user",
      "type": "NORMAL"
    }
  ],
  "removedReviewers": [
    {
      "name": "user",
      "emailAddress": "user@atlassian.com",
      "id": 36303,
      "displayName": "User",
      "active": true,
      "slug": "user",
      "type": "NORMAL"
    }
  ]
});
expectAssignable<PullRequestApproved>({  
  "eventKey":"pr:reviewer:approved",
  "date":"2017-09-19T10:10:01+1000",
  "actor":{  
    "name":"user",
    "emailAddress":"user@example.com",
    "id":2,
    "displayName":"User",
    "active":true,
    "slug":"user",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":1,
    "version":1,
    "title":"a new file added",
    "description":"A new description, added a user",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505779091796,
    "updatedDate":1505779257496,
    "fromRef":{  
      "id":"refs/heads/a-branch",
      "displayId":"a-branch",
      "latestCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"178864a7d521b6f5e720b386b2c2b0ef8563e0dc",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  
      {  
        "user":{  
          "name":"user",
          "emailAddress":"user@example.com",
          "id":2,
          "displayName":"User",
          "active":true,
          "slug":"user",
          "type":"NORMAL"
        },
        "lastReviewedCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
        "role":"REVIEWER",
        "approved":true,
        "status":"APPROVED"
      }
    ],
    "participants":[  

    ],
    "links":{  
      "self":[  
        null
      ]
    }
  },
  "participant":{  
    "user":{  
      "name":"user",
      "emailAddress":"user@example.com",
      "id":2,
      "displayName":"User",
      "active":true,
      "slug":"user",
      "type":"NORMAL"
    },
    "lastReviewedCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
    "role":"REVIEWER",
    "approved":true,
    "status":"APPROVED"
  },
  "previousStatus":"UNAPPROVED"
});
expectAssignable<PullRequestUnapproved>({  
  "eventKey":"pr:reviewer:unapproved",
  "date":"2017-09-19T10:13:43+1000",
  "actor":{  
    "name":"user",
    "emailAddress":"user@example.com",
    "id":2,
    "displayName":"User",
    "active":true,
    "slug":"user",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":1,
    "version":1,
    "title":"a new file added",
    "description":"A new description, added a user",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505779091796,
    "updatedDate":1505779257496,
    "fromRef":{  
      "id":"refs/heads/a-branch",
      "displayId":"a-branch",
      "latestCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"178864a7d521b6f5e720b386b2c2b0ef8563e0dc",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  
      {  
        "user":{  
          "name":"user",
          "emailAddress":"user@example.com",
          "id":2,
          "displayName":"User",
          "active":true,
          "slug":"user",
          "type":"NORMAL"
        },
        "lastReviewedCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
        "role":"REVIEWER",
        "approved":false,
        "status":"UNAPPROVED"
      }
    ],
    "participants":[  

    ]
  },
  "participant":{  
    "user":{  
      "name":"user",
      "emailAddress":"user@example.com",
      "id":2,
      "displayName":"User",
      "active":true,
      "slug":"user",
      "type":"NORMAL"
    },
    "lastReviewedCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
    "role":"REVIEWER",
    "approved":false,
    "status":"UNAPPROVED"
  },
  "previousStatus":"APPROVED"
});
expectAssignable<PullRequestNeedsWork>({  
  "eventKey":"pr:reviewer:needs_work",
  "date":"2017-09-19T10:14:47+1000",
  "actor":{  
    "name":"user",
    "emailAddress":"user@example.com",
    "id":2,
    "displayName":"User",
    "active":true,
    "slug":"user",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":1,
    "version":1,
    "title":"a new file added",
    "description":"A new description, added a user",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505779091796,
    "updatedDate":1505779257496,
    "fromRef":{  
      "id":"refs/heads/a-branch",
      "displayId":"a-branch",
      "latestCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"178864a7d521b6f5e720b386b2c2b0ef8563e0dc",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  
      {  
        "user":{  
          "name":"user",
          "emailAddress":"user@example.com",
          "id":2,
          "displayName":"User",
          "active":true,
          "slug":"user",
          "type":"NORMAL"
        },
        "lastReviewedCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
        "role":"REVIEWER",
        "approved":false,
        "status":"NEEDS_WORK"
      }
    ],
    "participants":[  

    ]
  },
  "participant":{  
    "user":{  
      "name":"user",
      "emailAddress":"user@example.com",
      "id":2,
      "displayName":"User",
      "active":true,
      "slug":"user",
      "type":"NORMAL"
    },
    "lastReviewedCommit":"ef8755f06ee4b28c96a847a95cb8ec8ed6ddd1ca",
    "role":"REVIEWER",
    "approved":false,
    "status":"NEEDS_WORK"
  },
  "previousStatus":"UNAPPROVED"
});
expectAssignable<PullRequestMerged>({  
  "eventKey":"pr:merged",
  "date":"2017-09-19T10:39:36+1000",
  "actor":{  
    "name":"user",
    "emailAddress":"user@example.com",
    "id":2,
    "displayName":"User",
    "active":true,
    "slug":"user",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":9,
    "version":2,
    "title":"file edited online with Bitbucket",
    "state":"MERGED",
    "open":false,
    "closed":true,
    "createdDate":1505781560908,
    "updatedDate":1505781576361,
    "closedDate":1505781576361,
    "fromRef":{  
      "id":"refs/heads/admin/file-1505781548644",
      "displayId":"admin/file-1505781548644",
      "latestCommit":"45f9690c928915a5e1c4366d5ee1985eea03f05d",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"8d2ad38c918fa6943859fca2176c89ea98b92a21",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  

    ],
    "participants":[  
      {  
        "user":{  
          "name":"user",
          "emailAddress":"user@example.com",
          "id":2,
          "displayName":"User",
          "active":true,
          "slug":"user",
          "type":"NORMAL"
        },
        "role":"PARTICIPANT",
        "approved":false,
        "status":"UNAPPROVED"
      }
    ],
    "properties":{  
      "mergeCommit":{  
        "displayId":"7e48f426f0a",
        "id":"7e48f426f0a6e47c5b5e862c31be6ca965f82c9c"
      }
    },
  }
});
expectAssignable<PullRequestDeclined>({  
  "eventKey":"pr:declined",
  "date":"2017-09-19T11:14:43+1000",
  "actor":{  
    "name":"admin",
    "emailAddress":"admin@example.com",
    "id":1,
    "displayName":"Administrator",
    "active":true,
    "slug":"admin",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":10,
    "version":2,
    "title":"Commit message",
    "state":"DECLINED",
    "open":false,
    "closed":true,
    "createdDate":1505783668760,
    "updatedDate":1505783683969,
    "closedDate":1505783683969,
    "fromRef":{  
      "id":"refs/heads/decline-me",
      "displayId":"decline-me",
      "latestCommit":"2d9fb6b9a46eafb1dcef7b008d1a429d45ca742c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"7e48f426f0a6e47c5b5e862c31be6ca965f82c9c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  
      {  
        "user":{  
          "name":"user",
          "emailAddress":"user@example.com",
          "id":2,
          "displayName":"User",
          "active":true,
          "slug":"user",
          "type":"NORMAL"
        },
        "role":"REVIEWER",
        "approved":false,
        "status":"UNAPPROVED"
      }
    ],
    "participants":[  

    ]
  }
});
expectAssignable<PullRequestDeleted>({  
  "eventKey":"pr:deleted",
  "date":"2017-09-19T11:16:17+1000",
  "actor":{  
    "name":"admin",
    "emailAddress":"admin@example.com",
    "id":1,
    "displayName":"Administrator",
    "active":true,
    "slug":"admin",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":10,
    "version":3,
    "title":"Commit message",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505783668760,
    "updatedDate":1505783750704,
    "fromRef":{  
      "id":"refs/heads/decline-me",
      "displayId":"decline-me",
      "latestCommit":"2d9fb6b9a46eafb1dcef7b008d1a429d45ca742c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"7e48f426f0a6e47c5b5e862c31be6ca965f82c9c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  
      {  
        "user":{  
          "name":"user",
          "emailAddress":"user@example.com",
          "id":2,
          "displayName":"User",
          "active":true,
          "slug":"user",
          "type":"NORMAL"
        },
        "role":"REVIEWER",
        "approved":false,
        "status":"UNAPPROVED"
      }
    ],
    "participants":[  

    ]
  }
});
expectAssignable<PullRequestCommentAdded>({  
  "eventKey":"pr:comment:added",
  "date":"2017-09-19T11:21:06+1000",
  "actor":{  
    "name":"admin",
    "emailAddress":"admin@example.com",
    "id":1,
    "displayName":"Administrator",
    "active":true,
    "slug":"admin",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":11,
    "version":1,
    "title":"A cool PR",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505783860548,
    "updatedDate":1505783878981,
    "fromRef":{  
      "id":"refs/heads/comment-pr",
      "displayId":"comment-pr",
      "latestCommit":"ddc19f786996396d57e17c8f6d1d05d00318ad10",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"7e48f426f0a6e47c5b5e862c31be6ca965f82c9c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  

    ],
    "participants":[  

    ]
  },
  "comment":{  
    "properties":{  
      "repositoryId":84
    },
    "id":62,
    "version":0,
    "text":"I am a PR comment",
    "author":{  
      "name":"admin",
      "emailAddress":"admin@example.com",
      "id":1,
      "displayName":"Administrator",
      "active":true,
      "slug":"admin",
      "type":"NORMAL"
    },
    "createdDate":1505784066751,
    "updatedDate":1505784066751,
    "comments":[  

    ],
    "tasks":[  

    ]
  },
  "commentParentId":43
});
expectAssignable<PullRequestCommentEdited>({  
  "eventKey":"pr:comment:edited",
  "date":"2017-09-19T11:24:19+1000",
  "actor":{  
    "name":"admin",
    "emailAddress":"admin@example.com",
    "id":1,
    "displayName":"Administrator",
    "active":true,
    "slug":"admin",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":11,
    "version":1,
    "title":"A cool PR",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505783860548,
    "updatedDate":1505783878981,
    "fromRef":{  
      "id":"refs/heads/comment-pr",
      "displayId":"comment-pr",
      "latestCommit":"ddc19f786996396d57e17c8f6d1d05d00318ad10",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"7e48f426f0a6e47c5b5e862c31be6ca965f82c9c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  

    ],
    "participants":[  

    ]
  },
  "comment":{  
    "properties":{  
      "repositoryId":84
    },
    "id":62,
    "version":1,
    "text":"I am a PR comment that was edited",
    "author":{  
      "name":"admin",
      "emailAddress":"admin@example.com",
      "id":1,
      "displayName":"Administrator",
      "active":true,
      "slug":"admin",
      "type":"NORMAL"
    },
    "createdDate":1505784066751,
    "updatedDate":1505784259446,
    "comments":[  

    ],
    "tasks":[  

    ]
  },
  "commentParentId":43,
  "previousComment":"I am a PR comment"
});
expectAssignable<PullRequestCommentDeleted>({  
  "eventKey":"pr:comment:deleted",
  "date":"2017-09-19T11:25:47+1000",
  "actor":{  
    "name":"admin",
    "emailAddress":"admin@example.com",
    "id":1,
    "displayName":"Administrator",
    "active":true,
    "slug":"admin",
    "type":"NORMAL"
  },
  "pullRequest":{  
    "id":11,
    "version":1,
    "title":"A cool PR",
    "state":"OPEN",
    "open":true,
    "closed":false,
    "createdDate":1505783860548,
    "updatedDate":1505783878981,
    "fromRef":{  
      "id":"refs/heads/comment-pr",
      "displayId":"comment-pr",
      "latestCommit":"ddc19f786996396d57e17c8f6d1d05d00318ad10",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "toRef":{  
      "id":"refs/heads/master",
      "displayId":"master",
      "latestCommit":"7e48f426f0a6e47c5b5e862c31be6ca965f82c9c",
      "repository":{  
        "slug":"repository",
        "id":84,
        "name":"repository",
        "scmId":"git",
        "state":"AVAILABLE",
        "statusMessage":"Available",
        "forkable":true,
        "project":{  
          "key":"PROJ",
          "id":84,
          "name":"project",
          "public":false,
          "type":"NORMAL"
        },
        "public":false
      }
    },
    "locked":false,
    "author":{  
      "user":{  
        "name":"admin",
        "emailAddress":"admin@example.com",
        "id":1,
        "displayName":"Administrator",
        "active":true,
        "slug":"admin",
        "type":"NORMAL"
      },
      "role":"AUTHOR",
      "approved":false,
      "status":"UNAPPROVED"
    },
    "reviewers":[  

    ],
    "participants":[  

    ]
  },
  "comment":{  
    "id":62,
    "version":1,
    "text":"I am a PR comment that was edited",
    "author":{  
      "name":"admin",
      "emailAddress":"admin@example.com",
      "id":1,
      "displayName":"Administrator",
      "active":true,
      "slug":"admin",
      "type":"NORMAL"
    },
    "createdDate":1505784066751,
    "updatedDate":1505784259446,
    "comments":[  

    ],
    "tasks":[  

    ]
  },
  "commentParentId":43
});