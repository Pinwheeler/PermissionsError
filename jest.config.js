module.exports = {
  projects: [
    {
      name: 'react',
      preset: 'react-native',
      setupFilesAfterEnv: ['<rootDir>/mockPermissions.js'],
    },
  ],
};
