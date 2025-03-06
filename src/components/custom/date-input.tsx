"use client"

import { Input } from "@chakra-ui/react"
import { withMask } from "use-mask-input"
import { Field } from "@/components/ui/field"

const DateInput = () => {
  return (
  <Field label="Date of purchase">
    <Input pattern="^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)\d{2}$" placeholder="DD/MM/YYYY" ref={withMask("99/99/9999")} />
  </Field>
  )
}

export default DateInput