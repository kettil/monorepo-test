// @semantic-release/changelog
const changelogFile = 'CHANGELOG.md';
const changelogTitle = '# Changelog';
// @semantic-release/git
const assets = [changelogFile, 'package.json', 'package-lock.json'];

const configuration = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'main',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    /*
    [
      '@semantic-release/exec',
      {
        // eslint-disable-next-line no-template-curly-in-string -- @SR requires the notation
        successCmd: 'echo "${nextRelease.notes}" >> test.txt',
      },
    ],
    //
    // git rev-parse --show-toplevel
    // */
    ['@semantic-release/changelog', { changelogFile, changelogTitle }],
    '@semantic-release/npm',
    ['@semantic-release/git', { assets }],
    [
      '@semantic-release/github',
      {
        addreleases: 'bottom',
        // successComment: false,
        // failComment: false
      },
    ],
  ],
  noCi: true,

  repositoryUrl: 'https://github.com/kettil/monorepo-test',
  // eslint-disable-next-line no-template-curly-in-string -- @SR requires the notation
  tagFormat: '${version}',
};

module.exports = configuration;
