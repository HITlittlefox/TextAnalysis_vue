const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

// CORS allow all
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

// Debug print request
app.use((req, res, next) => {
    console.log('request url:', req.url)
    console.log('request method:', req.method)
    console.log('request headers:', req.headers)
    console.log('request query:', req.query)
    console.log('request body:', req.body)
    next()
})

app.use(bodyParser.json())

app.get('/register/get_email_verify', (req, res) => {
    if (req.query.email_address) {
        res.json({ msg: '验证码已发送' })
    } else {
        res.json({ msg: '错误' })
    }
})

app.post('/register/register', (req, res) => {
    if (req.body.email_address && req.body.verify_code && req.body.password) {
        res.json({ msg: '注册成功' })
    } else {
        res.json({ msg: '错误' })
    }
})

app.post('/login/login', (req, res) => {
    if (req.body.email_address && req.body.password) {
        res.json({
            msg: '登录成功',
            data: {
                username: req.body.email_address
            }
        })
    } else {
        res.json({ msg: '错误' })
    }
})

app.get('/service/get_company_news', (req, res) => {
    if (req.query.stock_code && req.query.start_date && req.query.end_date) {
        res.json({
            msg: '查询成功',
            data: {
                count: 3,
                news: [
                    {
                        title: '上市公司X面临破产清算',
                        date: '2014年5月14日',
                        source: '野鸡新闻',
                        emot: ''
                    },
                    {
                        title: 'X公司股指逼近600点冲击新高',
                        date: '2014年3月12日',
                        source: '野鸡新闻',
                        emot: ''
                    },
                    {
                        title: 'X公司今日在深交所挂牌上市',
                        date: '2013年12月1日',
                        source: '野鸡新闻',
                        emot: ''
                    }
                ]
            }
        })
    } else {
        res.json({ msg: '错误' })
    }
})

app.listen(port, () => {
    console.log('application started')
})