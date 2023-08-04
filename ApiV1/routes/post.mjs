import express from 'express';
let router = express.Router()

//not recommemnded only for practice
let posts = [
    {
        id: 12435,
        title: "Muhammad! muhammad Khubaib naam hai mera! ",
        text: "me jhuke ga nhi saala"
    }
]

router.post('/post', (req, res, next) => {
    console.log("your post is SUCCESFULLY POSTED !", + new Date())

    if (!req.body.id || !req.body.title || !req.body.text) {
        res.status(403)
        res.send(`required parameter is missing,
        example request body:
        {
            id: "12435",
            title: "Muhammad! muhammad Khubaib naam hai mera! ",
            text: "me jhuke ga nhi saala"
        }`
        )
        return
    }

    posts.push({
        id: req.body.id,
        title: req.body.title,
        text: req.body.text
    })

    res.send("your post is SUCCESFULLY POSTED! " + new Date())
})

router.get('/posts', (req, res, next) => {
    console.log('you get all post', new Date());
    res.send(posts);
})

router.get('/post/:userId/:postId', (req, res, next) => {
    console.log("your post is created", + new Date())

    if(isNaN(req.params.postId)){
        res.status(403).send(`post id is must be always numeric, alphnumeric and alphabets are not allowed`)
    }

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === Number(req.params.postId)) {
            res.send(posts[i])
            return
        }
    }

    res.send("post not found with id " + req.params.postId + ' ' + new Date())
})

router.get('/posts/:userId', (req, res, next) => {
    console.log("your posts is created", + new Date())
    res.send("your posts is created! " + new Date())
})


router.put('/post/:userId', (req, res, next) => {
    console.log("your post is SUCCESFULLY POSTED", + new Date())
    res.send("your post is SUCCESFULLY POSTED" + new Date())
})

router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log("your post is deleted", + new Date())
    res.send("your post is deleted" + new Date())
})

export default router