const exp = require('express');
const fs = require('fs');
const register = exp.Router();
//配置存储信息
var time = Date.now();

register.post('/register', (req, res) => {
    var filename = `users/${req.body.petname}.json`;
    req.body.time=time;
    function sendDate(code, message) {
        res.status(200).json({ code, message })
    }
    //保存文件的方法
    function saveFile() {
        fs.exists(filename, (exists) => {
            if (exists) {
                //文件存在
                sendDate('registerd error', '用户名已存在,请直接登录')
            } else {
                //文件不存在
                fs.appendFile(filename, JSON.stringify(req.body), (error) => {
                    if (error) {
                        //注册失败
                        sendDate('registerd error', '注册失败');
                    } else {
                        //注册成功
                        sendDate('success', '注册成功');
                    }
                });
            }
        })
    }
    fs.exists('users', (exists) => {
        if (exists) {
            //不存在,直接写入根据注册信息生成的 用户信息文件
            saveFile();
        } else {
            //不存在
            fs.mkdir('users', (err) => {
                if (err) {
                    //创建失败
                    sendDate('file error', '注册失败');
                } else {
                    saveFile();
                }
            });
        }
    });
});



register.get('/signout', (req, res) => {
    //清除cookie
    res.clearCookie('petname');
    res.status(200).json({ code: 'success' })
})


//导出模块
module.exports = register;
