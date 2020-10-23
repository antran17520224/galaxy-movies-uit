const URL = {
    dev: {
        siteUrl: "",
        API_URL: "https://staging.pawnpd.tk/api",
    },
    production: {
        siteUrl: "",
        API_URL: "https://staging.pawnpd.tk/api",
    },
    qa: {
        siteUrl: "",
        API_URL: "https://staging.pawnpd.tk/api",
    },
    test: {
        siteUrl: "https://admin.pawnpd.tk",
        API_URL: "https://staging.pawnpd.tk/api",
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
