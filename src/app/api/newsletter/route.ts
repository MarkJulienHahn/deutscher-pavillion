import { NextResponse, NextRequest } from "next/server";
import fetch from "node-fetch";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const email = await req.json();

    const cleverReachEndpoint =
      "https://rest.cleverreach.com/v3/forms/377456/send/activate";
    const apiKey = "31d2f838872c37af4f7340a20a5121a2-4";

    const payload = {
      email: email,
      doidata: {
        user_ip: "79.202.43.77",
        referer: "https://deutscher-pavillion.org",
        user_agent: "Chrome 120.0.6099.216 (MacOs/12.7.1)"
      },
    };

    try {
      const response = await fetch(cleverReachEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        console.error("Subscription Successful");
        console.log(email);
        return NextResponse.json({ message: "Subscription Successful" });
      } else {
        const errorData = await response.json();
        console.error("Subscription Failed", errorData);
        return NextResponse.json(
          { error: "Subscription Failed", errorData },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error("Inernal Server Error");
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
