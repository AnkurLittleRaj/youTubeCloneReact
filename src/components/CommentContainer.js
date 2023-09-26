import React from 'react'
const commentData = [
    {
        "name":"Ankur Raj",
        comment:"Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
        reply:[]
    },
    {
        "name":"Ankur Raj",
        comment:"Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
        reply:[]
    },
    {
        "name":"Ankur Raj",
        comment:"nested 1Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
        reply:[

            {
                "name":"Ankur Raj",
                comment:"Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
                reply:[    {
                    "name":"Ankur Raj",
                    comment:" nested 2Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
                    reply:[]
                }]
            }
        ]
    },
    {
        "name":"Ankur Raj",
        comment:"Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
        reply:[
            {
                "name":"Ankur Raj",
                comment:"nested 1   Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
                reply:[]
            }
        ]
    },
    {
        "name":"Ankur Raj last",
        comment:"Random comments 8iLK6wcGTfP1S8MM9WHBCSsxUMI2TmHm1uCtmyEiU1lbdspdLS G0eaamLYPhF4QLyfORmupmGrN9bo2Opz9eyUMu9HlH5N6IgpSTNzOg2Lnm3p3xhWfJP5GlNWYiu",
        reply:[]
    }
]

const ShowComment = ({val})=>{
return (
    <div>
    <h1> Name : {val.name}</h1>
    <h2>Comment: {val.comment}</h2>
</div>
)


}
const CommentBuilder = ({comment})=>{

    return (<>
    
<div>
  {comment.map((com)=>(
    <div>
    <ShowComment val={com} />
<div className='p-1'>
    <CommentBuilder comment={com.reply}/>
</div>
</div>
  ))}  



</div>

    {/* ))} */}
    </>
    )
}


const Comments = ()=>{
   return ( 


        

        <div>
            
        <CommentBuilder comment={commentData} />
        </div>
 
   )

}


function CommentContainer() {
  return (
    <div>CommentContainer

        <Comments />
        hello
    </div>
  )
}

export default CommentContainer