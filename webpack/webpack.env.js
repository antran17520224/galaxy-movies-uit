const URL = {
    dev: {
        siteUrl: "",
        API_URL: "https://datve.herokuapp.com/api",
    },
    production: {
        siteUrl: "",
        API_URL: "https://datve.herokuapp.com/api",
    },
    qa: {
        siteUrl: "",
        API_URL: "https://datve.herokuapp.com/api",
    },
    test: {
        siteUrl: "",
        API_URL: "https://datve.herokuapp.com/api",
    },
};

const credentials = {
    production: {
        username: "",
        password: "",
    },
    qa: {
        username: "",
        password: "",
    },
    test: {
        username: "",
        password: "",
    },
};

const targetPath = "/SiteAssets/app/";

const NODE_PATH = "src/";

module.exports = {
    URL,
    NODE_PATH,
    credentials,
    targetPath,
};
