const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/',async(req,res)=>{
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.json(user) 
    } catch (error) {
        res.send("Error "+ error)
    }
})

router.post('/', async(req,res)=>{
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        pin:req.body.pin,
        balance:req.body.balance
    })

    try {
        const a1 = await newUser.save()
        res.json(a1)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        user.balance = req.body.balance
        const a1 = await user.save()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const a1 = await user.remove()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }
})
    

module.exports = router