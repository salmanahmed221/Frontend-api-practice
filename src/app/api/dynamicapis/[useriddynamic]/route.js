import { user } from "@/app/dummydata";
import React from "react";
import { NextResponse } from "next/server";

export function GET(response) {
  const data = user;
  return
  ( NextResponse.json(data))
}

// export async function POST(request){
//   return(
// NextResponse.json({result:"Hello"})
//   )
// }
