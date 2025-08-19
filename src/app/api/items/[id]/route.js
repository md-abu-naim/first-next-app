import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// Get Single Data By GET
export async function GET(req, { params }) {
    const p = await params
    const singleData = await dbConnect('products').findOne({ _id: new ObjectId(p.id) })

    return Response.json(singleData)
}

// Delete Data By DELETE
export async function DELETE(req, { params }) {
    const p = await params
    const singleData = await dbConnect('products').deleteOne({ _id: new ObjectId(p.id) })
    return Response.json(singleData)
}

// Upudate Data By PATCH
export async function PATCH(req, { params }) {
    const p = await params
    const data = await req.json()
    const filter = { _id: new ObjectId(p.id) }
    const options = {upsert: true}
    const singleData = await dbConnect('products').updateOne(filter, {$set: {...data}}, options)


    return Response.json(singleData)
}