import dbConnect from "@/lib/dbConnect"

export async function GET() {
    const data = await dbConnect('products').find().toArray()
    return Response.json(data)
}

export async function POST(req) {
    const postedData = req.body
    const result = await dbConnect('products').insertOne(postedData)
    return Response.json(result)
}