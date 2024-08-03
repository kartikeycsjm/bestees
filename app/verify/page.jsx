
const verify=async(token)=>{
    const res=await fetch(`${process.env.DEV}/api/verify`,{
        headers:{
            auth:token
        },
        cache:'no-store'
    })
    return await res.json()
}

const page = async(context) => {
    const token=context.searchParams.token
    console.log(token);
    
    const msg=await verify(token);
  return (
    <div>
        this is verification page
        <p>{msg}</p>
    </div>
  )
}

export default page