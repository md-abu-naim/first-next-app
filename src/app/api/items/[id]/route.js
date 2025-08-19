// Get Single Data By GET
export async function GET(req, {params}) {
    const p = await params
    console.log(p);
 
  return Response.json({ params: p })
}

// Delete Data By DELETE
export async function DELETE(req, {params}) {
    const p = await params
    console.log(p);
 
  return Response.json({ params: p })
}

// Upudate Data By PATCH
export async function PATCH(req, {params}) {
    const p = await params
    console.log(p);
 
  return Response.json({ params: p })
}