import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, topic, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using a service (you can use SendGrid, Resend, or any email service)
    // For now, we'll use a simple mailto link approach or you can integrate with an email service
    
    // Example using mailto (for development)
    // In production, use a proper email service like Resend, SendGrid, etc.
    const emailBody = `
New Mentor Session Request

Name: ${name}
Email: ${email}
Topic: ${topic || 'Not specified'}

Message:
${message}
    `.trim()

    // For production, integrate with an email service API
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@upcomingengineer.com',
    //   to: 'info@upcomingengineer.com',
    //   subject: 'New Mentor Session Request',
    //   text: emailBody,
    // })

    // For now, we'll return success (you should integrate with actual email service)
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your request has been submitted. We will contact you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
