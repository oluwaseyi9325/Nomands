"use client"

import { useEffect, useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"

const OtpPage = () => {
  const [otp, setOtp] = useState("")
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1)
      } else {
        setCanResend(true)
        clearInterval(countdown)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [timer])

  const handleResend = () => {
    // Resend OTP logic here
    setTimer(60)
    setCanResend(false)
  }

  const handleSubmit = () => {
    console.log("Submitted OTP:", otp)
    // Add verification logic
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Verify OTP</h2>
      <p className="text-sm text-center text-gray-600 mb-6">
          A six-digit OTP has been sent to your email address: <span className="font-medium">ade@gmail.com</span>
        </p>

        <div className="flex justify-center mb-6">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(val) => setOtp(val)}
          pattern={REGEXP_ONLY_DIGITS}
          // className="space-x-2"
          >
            <InputOTPGroup>
              <InputOTPSlot className="w-14 h-14 text-lg"  index={0} />
              <InputOTPSlot className="w-14 h-14 text-lg"  index={1} />
              <InputOTPSlot  className="w-14 h-14 text-lg" index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot className="w-14 h-14 text-lg"  index={3} />
              <InputOTPSlot className="w-14 h-14 text-lg"  index={4} />
              <InputOTPSlot className="w-14 h-14 text-lg"  index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Timer or Resend */}
        <p className="text-center text-sm text-gray-600 mb-4">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Resend OTP
            </button>
          ) : (
            <>Resend OTP in {timer}s</>
          )}
        </p>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="ntm"
        >
          Verify OTP
        </button>
    </>
  )
}

export default OtpPage
