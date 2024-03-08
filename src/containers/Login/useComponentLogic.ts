import { SubmitHandler, useForm } from "react-hook-form"
import { FormInputs } from "./interfaces"

export const useComponentLogic = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
      console.log("🚀 ~ useComponentLogic ~ data:", data)
  }

  return{
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}
