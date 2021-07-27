export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "/js/jquery-3.1.1.min.js" },
      { src: "/js/popper.min.js" },
      { src: "/js/bootstrap.js" },
      { src: "/js/plugins/metisMenu/jquery.metisMenu.js" },
      { src: "/js/plugins/slimscroll/jquery.slimscroll.min.js" },
      { src: "/js/plugins/flot/jquery.flot.js" },
      { src: "/js/plugins/flot/jquery.flot.tooltip.min.js" },
      { src: "/js/plugins/flot/jquery.flot.spline.js" },
      { src: "/js/plugins/flot/jquery.flot.resize.js" },
      { src: "/js/plugins/flot/jquery.flot.pie.js" },
      { src: "/js/plugins/flot/jquery.flot.symbol.js" },
      { src: "/js/plugins/flot/jquery.flot.time.js" },
      { src: "/js/plugins/peity/jquery.peity.min.js" },
      { src: "/js/demo/peity-demo.js" },
      { src: "/js/inspinia.js" },
      { src: "/js/plugins/pace/pace.min.js" },
      { src: "/js/plugins/jquery-ui/jquery-ui.min.js" },
      { src: "/js/plugins/flot/jquery.flot.pie.js" },
      { src: "/js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js" },
      { src: "/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" },
      { src: "/js/plugins/easypiechart/jquery.easypiechart.js" },
      { src: "/js/plugins/sparkline/jquery.sparkline.min.js" },
      { src: "/js/dropify.min.js" },
      { src: "/js/demo/sparkline-demo.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap.css",
    "~/assets/font-awesome/css/font-awesome.css",
    "~/assets/css/animate.css",
    "~/assets/css/plugins/iCheck/custom.css",
    "~/assets/css/dropify.css",
    "~/assets/css/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
