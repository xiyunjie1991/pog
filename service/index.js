const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
console.info('3000')
app.post('/user/login', (req, res) => {
  const { name, password } = req.body
  console.info('req.body', req.body)

  if (name === 'kaikeba' || (name === 'jerry' && password === '123')) {
    res.json({ code: 1, token: 'jilei', userinfo: { name: 'xiyunjie', sex: 'man', age: 18 } })
  } else {
    res.status(401).json({ code: 0, message: '用户名或密码错误' })
  }
})
app.get('/goods/contents', (req, res) => {
  res.json({
    code: 1,
    data: [
      {
        time: 1570032000,
        imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1',
        writer: '宇宙教师',
        collect: 200,
        title: '新中国体育史上，有哪些比赛的瞬间令你沸腾？网上流传的一句话 这句话来源于2001年46届世乒赛男团半决赛，中国小将刘国正对阵韩国老将金泽洙那场世纪之战。刘国',
        zhaiyao:
          '衍哥在印尼： "嫁人就嫁刘国正"！ 这是01年之后网上流传的一句话 这句话来源于2001年46届世乒赛男团半决赛，中国小将刘国正对阵韩国老将金泽洙那场世纪之战。刘国正九死一生，挽救7个赛点战',
        can: 789,
        comments: 1000,
        like: false
      },
      {
        time: 1570032000,
        writer: '宇宙教师',
        imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1',
        collect: 200,
        title: '你和异性朋友做过最暧昧的事是什么？',
        zhaiyao:
          '一大长腿的姑娘，部门缺人，履历也不错，经验也可以。一面就决定要她了，然后就进入我的部门，我的团队。除了工作关系之外，关系也蛮不错的，单约过几次电影，还有爬山啥的。',
        can: 789,
        comments: 1000,
        like: false
      },
      {
        time: 1570032000,
        writer: '宇宙教师',
        imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1',
        collect: 200,
        title: '战争史上有什么 bug 级的存在？',
        zhaiyao:
          '爱思客： 大家可能都忘了自己这个国家了：中国。 欧亚大陆的历史中，有个很有趣的现象：很多动不动就和中国历史上强大王朝并称“三大”、“四大”。在好莱坞电影…',
        can: 1561,
        comments: 324,
        like: true
      },
      {
        time: 1570032000,
        writer: '宇宙教师',
        imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1',
        collect: 200,
        title: '战争史上有什么 bug 级的存在？',
        zhaiyao:
          '爱思客： 大家可能都忘了自己这个国家了：中国。 欧亚大陆的历史中，有个很有趣的现象：很多动不动就和中国历史上强大王朝并称“三大”、“四大”。在好莱坞电影…',
        can: 1561,
        comments: 324,
        like: true
      }
    ]
  })
})

app.get('/user/info', (req, res) => {
  const roles = req.headers['x-token'] === 'admin' ? ['admin'] : ['editor']
  res.json({
    code: 1,
    data: roles
  })
})

app.listen(3000)
