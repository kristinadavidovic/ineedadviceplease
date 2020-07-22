const envs = [
    {
        name: 'domain',
        originalName: 'VUE_APP_AUTH_DOMAIN',
    },
    {
        name: 'clientId',
        originalName: 'VUE_APP_AUTH_CLIENT_ID',
    },
];

export default (name) => {
    const envByName = envs.find((env) => env.name === name);

    if (!envByName) {
        console.warn(`no env called "${name}" available`);
        return;
    }

    return process.env[envByName.originalName];
};
