import { NextResponse } from "next/server";
import { CurrencyCode, YouCanPay } from "youcan-payment-nodejs-sdk";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log(body);
    console.log(process.env.YCP_PRI_KEY);

    const youCanPayment = new YouCanPay(
      process.env.YCP_PRI_KEY,
      process.env.NEXT_PUBLIC_YCP_IS_SANDBOX
    );

    const token = await youCanPayment.getToken({
      order_id: body.orderId,
      amount: body.price * 100,
      currency: CurrencyCode.MAD,
      customer_ip: "127.0.0.1",
      success_url: "http://localhost:3000/payments/success",
      error_url: "http://localhost:3000/payments/error",
      customer: body.customer,
    });

    return NextResponse.json({
      ok: true,
      data: { token: token.id },
      message: "Token created",
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      data: null,
      message: "Error creating token",
      error: error,
    });
  }
}
