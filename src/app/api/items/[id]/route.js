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
    const singleData = await dbConnect('products').findOne({ _id: new ObjectId(p.id) })


    return Response.json({ params: p })
}