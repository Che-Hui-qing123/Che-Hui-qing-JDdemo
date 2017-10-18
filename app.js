const exp=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
const app=exp();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(exp.static('wwwroot'));


app.use(require('./routers/register'));
app.use(require('./routers/login'));



app.listen(3000, () => {
    console.log("服务器运行在3000端口...");
})