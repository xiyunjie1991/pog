module.exports = {
    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': ['./src/theme']
        }
      }
    },
    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    },
    // publicPath:'beat-practice',
    configureWebpack: {
      devServer: {
        proxy: {
          [process.env.VUE_APP_BASE_API]: {
              target: "http://127.0.0.1:3000/", 
              changOrigin: true,
              pathRewrite: {
                ["^" + process.env.VUE_APP_BASE_API]: ""
              }
          }
        },
        // before(app) {
        //   app.get("/api/login", (req, res) => {
        //     const { name, password } = req.query;
        //     if (name === "kaikeba" && password === "123") {
        //       res.json({ code: 1, token: "jilei",userinfo:{name:'xiyunjie',sex:'man',age:18} });
        //     } else {
        //       res.status(401).json({ code: 0, message: "用户名或密码错误" });
        //     }
        //   });

        //   app.post("/api/code", (req, res) => {
        //     console.info("api/code",req)
        //     // console.info("api/code",req.body)
        //     const { phone } = req.query;
        //     if (phone === "18501634665" ) {
        //       res.json({ code: 1,phoneCode:4444 });
        //     } else {
        //       res.status(500).json({ code: 0, message: "手机号错误" });
        //     }
        //   });
  
        //   function auth(req, res, next) {
        //     if (req.headers.token) {
        //       next();
        //     } else {
        //       res.status(401);
        //     }
        //   }
  
        //   app.get("/api/userinfo", auth, (req, res) => {
        //     res.json({ code: 1, data: { name: "Jerry" } });
        //   });
        // }
      }
    }
  };
  
