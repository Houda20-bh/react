const asyncHandler= require('express-async-handler');
const myGoal= require('../model/goalModel');
//@desc get goals
// @route  GET/api/goals
// @ access private
const getGoals= asyncHandler (async(req,res)=>{
    const goals = await myGoal.find();
    res.status(200).json(goals);
})
//@desc set goal
// @route POST /api/goals
// @ access private
const setGoal= asyncHandler (async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text fiel');
       }
       const goal= await myGoal.create({
        text: req.body.text,
       })
       res.status(200).json(goal);
})
//@desc update goal
// @route PUT /api/goals/:id
// @ access private
const updateGoal= asyncHandler (async(req,res)=>{
    const goal= await myGoal.findById(req.params.id)
    if (!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
    const updatedGoal= await myGoal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedGoal);
})
//@desc delete goal
// @route DELETE /api/goals/:id
// @ access private
const deleteGoal=  asyncHandler (async(req,res)=>{
        const goal= await myGoal.findById(req.params.id)
        if (!goal){
            res.status(400)
            throw new Error('Goal not found');
        }
        await goal.remove();
    res.status(200).json({id: req.params.id});
}
);
module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}