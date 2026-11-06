import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    const {
      fullName,
      organizationName,
      email,
      mobileNumber,
      customerType,
      productInterestedIn,
      requiredQuantity,
      preferredPackaging,
      deliveryLocation,
      intendedUsage,
      additionalMessage,
    } = data;

    if (!fullName || !organizationName || !email || !mobileNumber || !customerType || !requiredQuantity) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all mandatory fields.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Generate enquiry reference code
    const timestamp = Date.now().toString().slice(-6);
    const enquiryId = `DS-ENQ-${timestamp}`;

    const enquiryRecord = {
      enquiryId,
      fullName,
      organizationName,
      email,
      mobileNumber,
      customerType,
      productInterestedIn,
      requiredQuantity,
      preferredPackaging,
      deliveryLocation,
      intendedUsage,
      additionalMessage: additionalMessage || '',
      receivedAt: new Date().toISOString(),
      slaTarget: '48 Hours Response Guarantee',
      status: 'RECEIVED_AND_ALLOCATED_TO_SALES_LEAD'
    };

    console.log('[DHARTI_SAHELI_ENQUIRY_ACCEPTED]', JSON.stringify(enquiryRecord));

    return NextResponse.json({
      success: true,
      enquiryId,
      message: 'Your bulk enquiry has been received and allocated to the sales coordinator.',
      sla: 'A dedicated sales lead will contact you within 48 hours.'
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Failed to process bulk enquiry. Please try again.' },
      { status: 500 }
    );
  }
}

