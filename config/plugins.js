module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_MMbFgJ5UYOrBxmLKeuiFSWgksTws/1xr6cX0rGm",
      apiToken: "zfDQrU1yDYDqTe5oxLLjjcAE",
      appFilter: "react-ecommerce-server",
    //   teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});