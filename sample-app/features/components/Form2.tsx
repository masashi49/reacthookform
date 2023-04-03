import React from 'react'
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'

type IFormValues = {
  'First Name': string
}

type InputProps = {
  register: UseFormRegister<IFormValues>
  required: boolean
  labelName: keyof IFormValues
}

const Input = ({ register, required, labelName }: InputProps) => {
  return (
    <label htmlFor=''>
      <input {...register(labelName, { required })} />
    </label>
  )
}

function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>() // 検査する内容の型を入れる

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} required labelName='First Name' />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Form2
