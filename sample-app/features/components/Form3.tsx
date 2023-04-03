import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type IFormInputs = {
  firstName: string
  lastName: string
}

const Form3 = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && 'firstNameを入れて'}
        <input {...register('lastName', { required: true })} />
        {errors.lastName && 'firstNameを入れて'}
        <input type='submit' />
      </form>
    </div>
  )
}

export default Form3
