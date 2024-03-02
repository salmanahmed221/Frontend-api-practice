import { user } from "@/app/dummydata";
import React from "react";
import { NextResponse } from "next/server";

export function GET(response, content) {
  const data = user;
  // console.log(content.params.id)
  const singledata = data.filter((item) => item.id == content.params.usersid);
  return NextResponse.json(
    singledata.length == 0
      ? { result: "No result found" }
      : { result: singledata }
  );
}

// export async function PUT(request, content) {
//   try {
//     let dataload = await request.json();                      //For Normal Response
//     let userId = content.params.usersid;
//     // console.log(dataload, userId);
//     return NextResponse.json({ result: true });
//   } catch (error) {
//     console.error("Error processing PUT request:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }

export async function PUT(request, content) {
  let dataload = await request.json();
  let userId = content.params.usersid;
  console.log("AVFVFVFV", dataload); //For Conditional Response
  if (userId && dataload) {
    const data = user.find((item) => item.id == userId);
    data.name = dataload.name;
    data.age = dataload.age;
    data.email = dataload.email;
    return NextResponse.json({ result: true, res: data });
  } else {
    return NextResponse.json({ result: false });
  }
  // console.log(dataload, userId);
  //   if (!dataload.name || !dataload.age || !dataload.email) {
  //     return NextResponse.json({ result: "Request data is  not valid" });
  //   } else {
  //     return NextResponse.json({ result: true });
  //   }
  // } catch (error) {
  //   console.error("Error processing PUT request:", error);
  //   return NextResponse.json(
  //     { error: "Internal Server Error" },
  //     { status: 500 }
  //   );
  // }
}
