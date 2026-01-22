import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, course, background } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format email body
    const emailBody = `
New Enrollment Request

Name: ${firstName} ${lastName}
Email: ${email}
Course Interest: ${course}

Background:
${background || 'Not provided'}
    `.trim()

    // Send email using Resend (lazy init so app runs without API key)
    const apiKey = process.env.RESEND_API_KEY
    try {
      if (apiKey) {
        const resend = new Resend(apiKey)
        await resend.emails.send({
        from: 'noreply@upcomingengineer.com',
        to: 'info@upcomingengineer.com',
        replyTo: email,
        subject: 'New Enrollment Request - The School of Robotics',
        text: emailBody,
        html: `
          <h2>New Enrollment Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Course Interest:</strong> ${course}</p>
          <h3>Background:</h3>
          <p>${background ? background.replace(/\n/g, '<br>') : 'Not provided'}</p>
        `,
        })
      } else {
        console.warn('RESEND_API_KEY not set. Email not sent, but request logged.')
      }
    } catch (emailError) {
      console.error('Resend API error:', emailError)
      throw emailError
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your enrollment request has been submitted. We will contact you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending enrollment email:', error)
    return NextResponse.json(
      { error: 'Failed to submit enrollment request' },
      { status: 500 }
    )
  }
}
