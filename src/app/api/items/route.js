import dbConnect from "@/lib/dbConnect"

export async function GET() {
    const data = await dbConnect('products').find().toArray()
    return Response.json(data)
}

export async function POST(req) {
    const postedData = await req.json()
    console.log(postedData);
    const result = await dbConnect('products').insertOne(postedData)
    return Response.json(result)
}