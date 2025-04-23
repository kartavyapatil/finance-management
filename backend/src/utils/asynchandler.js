
const asynchandler = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((e) => {
      console.error("Promise rejected:", e);
      next(e);
    });
  };
  export default asynchandler





















// const asynchandler=(fn)=> async (req,res,next)=>{
//     try{

//     }catch(error){
//         res.status(err.code ||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
// export default asynchandler