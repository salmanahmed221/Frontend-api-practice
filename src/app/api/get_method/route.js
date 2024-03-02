import React from 'react'
import {NextResponse} from 'next/server';
export async function GET(Request) {
  return (
    NextResponse.json({
        name:"ABC",
        age:"34",
        address:"Pakistan"
    },{status:200}) //status mentioning is optional.
  )
}
