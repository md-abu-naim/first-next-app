export async function GET() {
  
    const data = {
        message: 'Successfully get data',
        error: false,
        status: 200,
    }
 
  return Response.json({ data })
}

export async function POST(req) {
  
    const postedData = req.body
 
  return Response.json({ postedData })
}