import { NextResponse } from "next/server";
import Crypto from "crypto-js";

export async function GET() {
  const CryptoJS = Crypto.lib.WordArray.random(32).toString(Crypto.enc.Base64);
  return NextResponse.json({ message: CryptoJS });
}

