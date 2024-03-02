import { user } from '@/app/dummydata'
import React from 'react'
import {NextResponse} from 'next/server'

//GET API
export function GET(response) {
    const data=user;
  return (
    NextResponse.json(data)
  )
}

//POST API
// export async function POST(request){                         //for normal response
//   let dataload=await request.json()
//   console.log(dataload)
//   return(
// NextResponse.json({result:"Hello"})
//   )
// }

export async function POST(request){                            //conditional response
  let dataload=await request.json()
  if(!dataload.name || !dataload.age ||!dataload.email){
    return NextResponse.json({result:"Required Field Not Found",success:false})
  }else{
    return NextResponse.json({result:"New User Created",success:true})
  }
 
}


