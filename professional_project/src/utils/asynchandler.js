const asynchandler =  (requesthandler) => {
    return (req,res,next) =>{
        Promise.resolve(requesthandler(req,res,next)).
        catch((error) => next(error))
    }
}

export {asynchandler}

// const asynchandler = () => {}  // create simple function 
// const asynchandler = (func) => () => {}
// const asynchandler = (func) => async() => {}


// const asynchandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req , res , next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }
// }